// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const text = this.getAttribute("data-clipboard-text");
      navigator.clipboard.writeText(text).then(() => {
        this.textContent = "✅";
        setTimeout(() => {
          this.textContent = "📋";
        }, 2000);
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// // Search toggle for mobile
// const searchToggle = document.createElement("button");
// searchToggle.className = "search-toggle";
// searchToggle.innerHTML = "🔍";
// searchToggle.setAttribute("aria-label", "Toggle search");

// // Insert search toggle before nav-toggle
// const navToggle = document.getElementById("nav-toggle");
// if (navToggle) {
//   navToggle.parentNode.insertBefore(searchToggle, navToggle);

//   searchToggle.addEventListener("click", function () {
//     const navSearch = document.querySelector(".nav-search");
//     if (navSearch) {
//       navSearch.classList.toggle("active");
//       if (navSearch.classList.contains("active")) {
//         const searchInput = document.getElementById("search-input");
//         if (searchInput) {
//           setTimeout(() => searchInput.focus(), 100);
//         }
//       }
//     }
//   });
// }

// Copy Button Functionality
class CodeCopyButtons {
  constructor() {
    this.init();
  }

  init() {
    this.addCopyButtons();
  }

  addCopyButtons() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement;

      // Skip if copy button already exists
      if (pre.querySelector(".copy-button")) {
        return;
      }

      // Make pre element relative for absolute positioning
      pre.style.position = "relative";

      // Create copy button
      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("aria-label", "Copy code to clipboard");

      // Add click event
      copyButton.addEventListener("click", () => {
        this.copyCode(codeBlock, copyButton);
      });

      pre.appendChild(copyButton);
    });
  }

  async copyCode(codeBlock, button) {
    const code = codeBlock.textContent;

    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "Copied!";
      button.classList.add("copied");

      setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
      button.textContent = "Error";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 2000);
    }
  }
}

// Table of Contents Toggle
class TOCToggle {
  constructor() {
    this.init();
  }

  init() {
    const tocContainers = document.querySelectorAll(".toc-container");

    tocContainers.forEach((container) => {
      this.addToggleButton(container);
    });
  }

  addToggleButton(container) {
    const heading = container.querySelector("h3");
    const tocContent = container.querySelector(".toc");

    if (!heading || !tocContent) return;

    // Create toggle button
    const toggleButton = document.createElement("button");
    toggleButton.className = "toc-toggle";
    toggleButton.innerHTML = "▼";
    toggleButton.setAttribute("aria-label", "Toggle table of contents");

    // Add button to heading
    heading.appendChild(toggleButton);

    // Add content wrapper class
    tocContent.className += " toc-content expanded";

    // Add click event
    toggleButton.addEventListener("click", () => {
      this.toggleTOC(tocContent, toggleButton);
    });
  }

  toggleTOC(tocContent, button) {
    const isExpanded = tocContent.classList.contains("expanded");

    if (isExpanded) {
      tocContent.classList.remove("expanded");
      tocContent.classList.add("collapsed");
      button.classList.add("collapsed");
      button.innerHTML = "▶";
    } else {
      tocContent.classList.remove("collapsed");
      tocContent.classList.add("expanded");
      button.classList.remove("collapsed");
      button.innerHTML = "▼";
    }
  }
}

// // Mobile Navigation Toggle
// class MobileNav {
//   constructor() {
//     this.init();
//   }

//   init() {
//     const navToggle = document.getElementById("nav-toggle");
//     const navMenu = document.getElementById("nav-menu");

//     if (navToggle && navMenu) {
//       navToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//         navToggle.classList.toggle("active");
//       });
//     }
//   }
// }

// // Smooth Scrolling for Anchor Links
// class SmoothScroll {
//   constructor() {
//     this.init();
//   }

//   init() {
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", (e) => {
//         e.preventDefault();
//         const target = document.querySelector(anchor.getAttribute("href"));
//         if (target) {
//           target.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       });
//     });
//   }
// }

// // Initialize everything when DOM is ready
// document.addEventListener("DOMContentLoaded", function () {
//   new CodeCopyButtons();
//   new TOCToggle();
//   new MobileNav();
//   new SmoothScroll();
// });

// Theme Management System
class ThemeManager {
  constructor() {
    this.themes = ["light", "dark"];
    this.currentTheme = this.getThemePreference();
    this.init();
  }

  getThemePreference() {
    // Check localStorage first
    const stored = localStorage.getItem("theme");
    if (stored && this.themes.includes(stored)) {
      return stored;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "light";
  }

  setTheme(theme) {
    if (!this.themes.includes(theme)) return;

    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update toggle button aria-label
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.setAttribute(
        "aria-label",
        `Switch to ${theme === "light" ? "dark" : "light"} theme`,
      );
    }

    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);

    // Setup toggle button
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", () => this.toggleTheme());
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          // Only auto-switch if user hasn't manually set a preference
          if (!localStorage.getItem("theme")) {
            this.setTheme(e.matches ? "dark" : "light");
          }
        });
    }

    // Keyboard shortcut (Ctrl/Cmd + Shift + L)
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "L") {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }
}

// Mobile Navigation Management
class NavigationManager {
  constructor() {
    this.navToggle = document.getElementById("nav-toggle");
    this.navMenu = document.getElementById("nav-menu");
    this.init();
  }

  init() {
    if (this.navToggle && this.navMenu) {
      this.navToggle.addEventListener("click", () => this.toggleMenu());

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !this.navMenu.contains(e.target) &&
          !this.navToggle.contains(e.target)
        ) {
          this.closeMenu();
        }
      });

      // Close menu on escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.closeMenu();
        }
      });

      // Close menu when clicking on nav links (mobile)
      const navLinks = this.navMenu.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          this.closeMenu();
        });
      });
    }
  }

  toggleMenu() {
    this.navMenu.classList.toggle("active");
    this.navToggle.classList.toggle("active");

    // Update aria attributes for accessibility
    const isOpen = this.navMenu.classList.contains("active");
    this.navToggle.setAttribute("aria-expanded", isOpen);
    this.navMenu.setAttribute("aria-hidden", !isOpen);
  }

  closeMenu() {
    this.navMenu.classList.remove("active");
    this.navToggle.classList.remove("active");
    this.navToggle.setAttribute("aria-expanded", false);
    this.navMenu.setAttribute("aria-hidden", true);
  }
}

// Copy to Clipboard Manager
// class ClipboardManager {
//   constructor() {
//     this.init();
//   }

//   init() {
//     // Copy to clipboard functionality
//     const copyButtons = document.querySelectorAll(".copy-btn");
//     copyButtons.forEach((button) => {
//       button.addEventListener("click", (e) => this.handleCopy(e));
//     });

//     // Add copy buttons to code blocks dynamically
//     this.addCopyButtonsToCodeBlocks();
//   }

//   async handleCopy(event) {
//     const button = event.target;
//     const text = button.getAttribute("data-clipboard-text");

//     if (!text) return;

//     try {
//       await navigator.clipboard.writeText(text);
//       this.showCopySuccess(button);
//     } catch (err) {
//       // Fallback for older browsers
//       this.fallbackCopyTextToClipboard(text, button);
//     }
//   }

//   fallbackCopyTextToClipboard(text, button) {
//     const textArea = document.createElement("textarea");
//     textArea.value = text;
//     textArea.style.position = "fixed";
//     textArea.style.left = "-999999px";
//     textArea.style.top = "-999999px";
//     document.body.appendChild(textArea);
//     textArea.focus();
//     textArea.select();

//     try {
//       document.execCommand("copy");
//       this.showCopySuccess(button);
//     } catch (err) {
//       console.error("Fallback: Oops, unable to copy", err);
//     }

//     document.body.removeChild(textArea);
//   }

//   showCopySuccess(button) {
//     const originalText = button.textContent;
//     button.textContent = "✅";
//     button.classList.add("copied");

//     setTimeout(() => {
//       button.textContent = originalText;
//       button.classList.remove("copied");
//     }, 2000);
//   }

//   addCopyButtonsToCodeBlocks() {
//     const codeBlocks = document.querySelectorAll("pre code");
//     codeBlocks.forEach((codeBlock) => {
//       const pre = codeBlock.parentElement;
//       if (!pre.querySelector(".copy-button")) {
//         const button = document.createElement("button");
//         button.className = "copy-button";
//         button.textContent = "📋";
//         button.title = "Copy code";
//         button.setAttribute("data-clipboard-text", codeBlock.textContent);

//         pre.style.position = "relative";
//         pre.appendChild(button);

//         button.addEventListener("click", (e) => this.handleCopy(e));
//       }
//     });
//   }
// }

// Smooth Scrolling Manager
class ScrollManager {
  constructor() {
    this.init();
  }

  init() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => this.handleSmoothScroll(e));
    });

    // Add scroll-to-top functionality
    this.addScrollToTop();
  }

  handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  addScrollToTop() {
    // Create scroll-to-top button
    const scrollButton = document.createElement("button");
    scrollButton.className = "scroll-to-top";
    scrollButton.innerHTML = "↑";
    scrollButton.title = "Scroll to top";
    scrollButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: var(--color-primary);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        `;

    document.body.appendChild(scrollButton);

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollButton.style.opacity = "1";
        scrollButton.style.visibility = "visible";
      } else {
        scrollButton.style.opacity = "0";
        scrollButton.style.visibility = "hidden";
      }
    });

    // Scroll to top when clicked
    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Performance Observer for Loading States
class PerformanceManager {
  constructor() {
    this.init();
  }

  init() {
    // Add loading class to body initially
    document.body.classList.add("loading");

    // Remove loading class when page is fully loaded
    window.addEventListener("load", () => {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    });

    // Preload critical resources
    this.preloadCriticalResources();
  }

  preloadCriticalResources() {
    // Preload fonts
    const fonts = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap",
    ];

    fonts.forEach((fontUrl) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = fontUrl;
      document.head.appendChild(link);
    });
  }
}

// Initialize all managers when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all managers
  new ThemeManager();
  new NavigationManager();
  new TOCToggle();
  // new ClipboardManager();
  new CodeCopyButtons();
  new ScrollManager();
  new PerformanceManager();

  // Add ARIA labels for better accessibility
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("role", "switch");
  }

  // Enhanced keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Focus management for better accessibility
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });

  console.log("🔥 Ignitia theme initialized with light/dark mode support!");
});

// Handle theme-specific code highlighting
window.addEventListener("themechange", (e) => {
  const { theme } = e.detail;

  // Update syntax highlighting if needed
  const codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach((block) => {
    block.className = block.className.replace(/theme-\w+/g, `theme-${theme}`);
  });
});

// Export for external use
window.IgnitiaTheme = {
  setTheme: (theme) => {
    const themeManager = new ThemeManager();
    themeManager.setTheme(theme);
  },
  getTheme: () => {
    return document.documentElement.getAttribute("data-theme");
  },
  toggleTheme: () => {
    const themeManager = new ThemeManager();
    themeManager.toggleTheme();
  },
};
