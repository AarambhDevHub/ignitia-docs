// Search functionality for Ignitia docs
class IgnitiaSearch {
  constructor() {
    this.searchInput = document.getElementById("search-input");
    this.searchResults = document.getElementById("search-results");
    this.searchIndex = null;
    this.documents = [];

    if (this.searchInput && this.searchResults) {
      this.init();
    }
  }

  async init() {
    try {
      // Load search index
      const response = await fetch("/search_index.en.js");
      const searchScript = await response.text();

      // Execute the search index script
      const func = new Function(searchScript);
      func();

      // Get the search index from window
      this.searchIndex = window.searchIndex;
      this.documents = Object.values(this.searchIndex.documentStore.docs);

      // Initialize elasticlunr
      this.lunrIndex = elasticlunr(function () {
        this.addField("title");
        this.addField("body");
        this.addField("description");
        this.setRef("id");
      });

      // Add documents to lunr index
      this.documents.forEach((doc) => {
        this.lunrIndex.addDoc({
          id: doc.id,
          title: doc.title,
          body: doc.body,
          description: doc.description || "",
        });
      });

      this.setupEventListeners();
    } catch (error) {
      console.error("Failed to load search index:", error);
    }
  }

  setupEventListeners() {
    this.searchInput.addEventListener(
      "input",
      this.debounce(this.handleSearch.bind(this), 300),
    );
    this.searchInput.addEventListener("focus", this.handleFocus.bind(this));

    // Hide results when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !this.searchInput.contains(e.target) &&
        !this.searchResults.contains(e.target)
      ) {
        this.hideResults();
      }
    });

    // Handle keyboard navigation
    this.searchInput.addEventListener(
      "keydown",
      this.handleKeyboard.bind(this),
    );
  }

  handleSearch(e) {
    const query = e.target.value.trim();

    if (query.length < 2) {
      this.hideResults();
      return;
    }

    this.performSearch(query);
  }

  handleFocus() {
    const query = this.searchInput.value.trim();
    if (query.length >= 2) {
      this.performSearch(query);
    }
  }

  performSearch(query) {
    try {
      const results = this.lunrIndex.search(query, {
        fields: {
          title: { boost: 3 },
          description: { boost: 2 },
          body: { boost: 1 },
        },
        expand: true,
      });

      this.displayResults(results.slice(0, 8)); // Limit to 8 results
    } catch (error) {
      console.error("Search error:", error);
      this.hideResults();
    }
  }

  displayResults(results) {
    if (results.length === 0) {
      this.searchResults.innerHTML =
        '<div class="search-result no-results">No results found</div>';
      this.searchResults.classList.add("active");
      return;
    }

    const html = results
      .map((result, index) => {
        const doc = this.documents.find((d) => d.id === result.ref);
        if (!doc) return "";

        const snippet = this.createSnippet(
          doc.body,
          this.searchInput.value,
          120,
        );

        return `
                  <div class="search-result" data-index="${index}" data-url="${doc.id}">
                      <div class="result-title">${this.highlightText(doc.title, this.searchInput.value)}</div>
                      <div class="result-snippet">${snippet}</div>
                  </div>
              `;
      })
      .join("");

    this.searchResults.innerHTML = html;
    this.searchResults.classList.add("active");

    // Add click handlers
    this.searchResults.querySelectorAll(".search-result").forEach((result) => {
      result.addEventListener("click", () => {
        const url = result.dataset.url;
        if (url) {
          window.location.href = url;
        }
      });
    });
  }

  createSnippet(text, query, maxLength) {
    if (!text) return "";

    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    if (index === -1) {
      return text.substring(0, maxLength) + "...";
    }

    const start = Math.max(0, index - 40);
    const end = Math.min(text.length, start + maxLength);
    const snippet = text.substring(start, end);

    return (
      (start > 0 ? "..." : "") +
      this.highlightText(snippet, query) +
      (end < text.length ? "..." : "")
    );
  }

  highlightText(text, query) {
    if (!query || !text) return text;

    const regex = new RegExp(`(${this.escapeRegExp(query)})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  hideResults() {
    this.searchResults.classList.remove("active");
    this.searchResults.innerHTML = "";
  }

  handleKeyboard(e) {
    const results = this.searchResults.querySelectorAll(".search-result");
    if (results.length === 0) return;

    const current = this.searchResults.querySelector(".search-result.selected");
    let index = current ? parseInt(current.dataset.index) : -1;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        index = Math.min(index + 1, results.length - 1);
        this.selectResult(index);
        break;

      case "ArrowUp":
        e.preventDefault();
        index = Math.max(index - 1, 0);
        this.selectResult(index);
        break;

      case "Enter":
        e.preventDefault();
        if (current) {
          const url = current.dataset.url;
          if (url) {
            window.location.href = url;
          }
        }
        break;

      case "Escape":
        this.hideResults();
        this.searchInput.blur();
        break;
    }
  }

  selectResult(index) {
    const results = this.searchResults.querySelectorAll(".search-result");
    results.forEach((result, i) => {
      result.classList.toggle("selected", i === index);
    });
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// CSS for search highlights
const searchStyles = `
    .search-result.selected {
        background: var(--color-primary) !important;
        color: var(--color-white) !important;
    }
    .search-result.selected .result-title,
    .search-result.selected .result-snippet {
        color: var(--color-white) !important;
    }
    .search-result mark {
        background: #ffeb3b;
        padding: 1px 2px;
        border-radius: 2px;
    }
    .search-result.selected mark {
        background: rgba(255, 255, 255, 0.3);
        color: inherit;
    }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Initialize search when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new IgnitiaSearch());
} else {
  new IgnitiaSearch();
}
