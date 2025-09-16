#ignitia-zola-doc

## theme.toml
```
name = "ignitia-theme"
description = "A modern, blazing fast theme for Ignitia Rust Web Framework"
license = "MIT"
homepage = "https://github.com/AarambhDevHub/ignitia"
min_version = "0.17.0"
demo = ""

[author]
name = "Darshan Vichhi"
homepage = "https://github.com/AarambhDevHub"

[extra]
```

## config.toml
```
base_url = "https://localhost:1111"
title = "Ignitia - Rust Web Framework"
description = "A blazing fast, lightweight web framework for Rust that ignites your development journey"

compile_sass = true
minify_html = true
generate_feeds = true
build_search_index = true

theme = "ignitia-theme"

[extra]
version = "0.2.0"
github_url = "https://github.com/AarambhDevHub/ignitia"
youtube_url = "https://www.youtube.com/@AarambhDevHub"

[search]
index_format = "elasticlunr_javascript"
include_title = true
include_description = true
include_content = true


[markdown]
highlight_code = true
highlight_theme = "base16-ocean-dark"

```

## templates/index.html
```html
{% extends "base.html" %} {% block body_class %}home{% endblock %} {% block
content %}
<!-- Hero Section -->
<section class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-text"
                    >🚀 Now in v{{ config.extra.version | default(value="0.2.0")
                    }}</span
                >
            </div>

            <h1 class="hero-title">
                <span class="hero-flame">🔥</span>
                <span class="hero-ignitia">Ignitia</span>
            </h1>

            <p class="hero-subtitle">
                A blazing fast, lightweight web framework for Rust that ignites
                your development journey
            </p>

            <div class="hero-actions">
                <a href="{{ get_url(path='docs') }}" class="btn btn-primary">
                    Get Started
                    <svg
                        class="btn-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/AarambhDevHub/ignitia"
                    class="btn btn-secondary"
                >
                    <svg
                        class="btn-icon"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                    >
                        <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                    View on GitHub
                </a>
            </div>
        </div>

        <div class="hero-code">
            <div class="code-window">
                <div class="code-header">
                    <div class="code-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="code-title">main.rs</span>
                </div>
                <div class="code-content">
                    <pre>
<code class="language-rust">
use ignitia::{Router, Response, Server};

#[tokio::main]
async fn main() -> Result<(), Box&lt;dyn std::error::Error&gt;> {
    let router = Router::new()
        .get("/", || async {
            Ok(Response::text("🔥 Ignitia is blazing!"))
        })
        .get("/api/users/:id", |Path(id): Path&lt;u32&gt;| async move {
            Ok(Response::json(json!({
                "user_id": id,
                "message": "User found!"
            }))?)
        });

    Server::new(router, "127.0.0.1:3000".parse()?)
        .ignitia()
        .await?;

    Ok(())
}
</code>
</pre>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="features">
    <div class="features-container">
        <div class="section-header">
            <h2 class="section-title">Why Choose Ignitia?</h2>
            <p class="section-subtitle">
                Built for performance, designed for developers
            </p>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3 class="feature-title">Blazing Fast</h3>
                <p class="feature-description">
                    Built with Rust's zero-cost abstractions and optimized for
                    maximum performance.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <h3 class="feature-title">Type Safe</h3>
                <p class="feature-description">
                    Leverage Rust's powerful type system to catch errors at
                    compile time.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔧</div>
                <h3 class="feature-title">Developer Friendly</h3>
                <p class="feature-description">
                    Intuitive APIs with excellent error messages and
                    comprehensive documentation.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌐</div>
                <h3 class="feature-title">WebSocket Support</h3>
                <p class="feature-description">
                    Built-in WebSocket support for real-time applications with
                    async handlers.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔐</div>
                <h3 class="feature-title">Security First</h3>
                <p class="feature-description">
                    Built-in middleware for CORS, rate limiting, authentication,
                    and more.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📦</div>
                <h3 class="feature-title">Lightweight</h3>
                <p class="feature-description">
                    Minimal dependencies with optional features to keep your
                    binary size small.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Quick Start Section -->
<section class="quickstart">
    <div class="quickstart-container">
        <div class="quickstart-content">
            <h2 class="quickstart-title">Get Started in Seconds</h2>
            <p class="quickstart-subtitle">
                Add Ignitia to your Cargo.toml and start building
            </p>

            <div class="quickstart-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Add to Cargo.toml</h3>
                        <div class="code-snippet">
                            <code
                                >[dependencies]<br />ignitia = "{{
                                config.extra.version | default(value='0.2.0')
                                }}"<br />tokio = { version = "1.0", features =
                                ["full"] }</code
                            >
                            <button
                                class="copy-btn"
                                data-clipboard-text='[dependencies]&#10;ignitia = "{{ config.extra.version | default(value="0.2.0") }}"&#10;tokio = { version = "1.0", features = ["full"] }'
                            >
                                📋
                            </button>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Create your first route</h3>
                        <div class="code-snippet">
                            <code>cargo run</code>
                            <button
                                class="copy-btn"
                                data-clipboard-text="cargo run"
                            >
                                📋
                            </button>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Start building!</h3>
                        <p>
                            Visit <code>http://localhost:3000</code> and see
                            your app running
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{% endblock %}
```

## templates/base.html
```html
{% extends "base.html" %} {% block body_class %}home{% endblock %} {% block
content %}
<!-- Hero Section -->
<section class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-text"
                    >🚀 Now in v{{ config.extra.version | default(value="0.2.0")
                    }}</span
                >
            </div>

            <h1 class="hero-title">
                <span class="hero-flame">🔥</span>
                <span class="hero-ignitia">Ignitia</span>
            </h1>

            <p class="hero-subtitle">
                A blazing fast, lightweight web framework for Rust that ignites
                your development journey
            </p>

            <div class="hero-actions">
                <a href="{{ get_url(path='docs') }}" class="btn btn-primary">
                    Get Started
                    <svg
                        class="btn-icon"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="https://github.com/AarambhDevHub/ignitia"
                    class="btn btn-secondary"
                >
                    <svg
                        class="btn-icon"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                    >
                        <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                    View on GitHub
                </a>
            </div>
        </div>

        <div class="hero-code">
            <div class="code-window">
                <div class="code-header">
                    <div class="code-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="code-title">main.rs</span>
                </div>
                <div class="code-content">
                    <pre>
<code class="language-rust">
use ignitia::{Router, Response, Server};

#[tokio::main]
async fn main() -> Result<(), Box&lt;dyn std::error::Error&gt;> {
    let router = Router::new()
        .get("/", || async {
            Ok(Response::text("🔥 Ignitia is blazing!"))
        })
        .get("/api/users/:id", |Path(id): Path&lt;u32&gt;| async move {
            Ok(Response::json(json!({
                "user_id": id,
                "message": "User found!"
            }))?)
        });

    Server::new(router, "127.0.0.1:3000".parse()?)
        .ignitia()
        .await?;

    Ok(())
}
</code>
</pre>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="features">
    <div class="features-container">
        <div class="section-header">
            <h2 class="section-title">Why Choose Ignitia?</h2>
            <p class="section-subtitle">
                Built for performance, designed for developers
            </p>
        </div>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3 class="feature-title">Blazing Fast</h3>
                <p class="feature-description">
                    Built with Rust's zero-cost abstractions and optimized for
                    maximum performance.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <h3 class="feature-title">Type Safe</h3>
                <p class="feature-description">
                    Leverage Rust's powerful type system to catch errors at
                    compile time.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔧</div>
                <h3 class="feature-title">Developer Friendly</h3>
                <p class="feature-description">
                    Intuitive APIs with excellent error messages and
                    comprehensive documentation.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌐</div>
                <h3 class="feature-title">WebSocket Support</h3>
                <p class="feature-description">
                    Built-in WebSocket support for real-time applications with
                    async handlers.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔐</div>
                <h3 class="feature-title">Security First</h3>
                <p class="feature-description">
                    Built-in middleware for CORS, rate limiting, authentication,
                    and more.
                </p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">📦</div>
                <h3 class="feature-title">Lightweight</h3>
                <p class="feature-description">
                    Minimal dependencies with optional features to keep your
                    binary size small.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Quick Start Section -->
<section class="quickstart">
    <div class="quickstart-container">
        <div class="quickstart-content">
            <h2 class="quickstart-title">Get Started in Seconds</h2>
            <p class="quickstart-subtitle">
                Add Ignitia to your Cargo.toml and start building
            </p>

            <div class="quickstart-steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Add to Cargo.toml</h3>
                        <div class="code-snippet">
                            <code
                                >[dependencies]<br />ignitia = "{{
                                config.extra.version | default(value='0.2.0')
                                }}"<br />tokio = { version = "1.0", features =
                                ["full"] }</code
                            >
                            <button
                                class="copy-btn"
                                data-clipboard-text='[dependencies]&#10;ignitia = "{{ config.extra.version | default(value="0.2.0") }}"&#10;tokio = { version = "1.0", features = ["full"] }'
                            >
                                📋
                            </button>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Create your first route</h3>
                        <div class="code-snippet">
                            <code>cargo run</code>
                            <button
                                class="copy-btn"
                                data-clipboard-text="cargo run"
                            >
                                📋
                            </button>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Start building!</h3>
                        <p>
                            Visit <code>http://localhost:3000</code> and see
                            your app running
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{% endblock %}
```

## static/css/syntax.css
```
/* Rust syntax highlighting for code blocks */
.highlight {
    background: #2d3748;
    color: #e2e8f0;
    border-radius: 0.375rem;
    overflow-x: auto;
}

.highlight pre {
    margin: 0;
    padding: 1rem;
    line-height: 1.6;
}

.highlight .k {
    color: #ff6b9d;
} /* Keywords */
.highlight .kd {
    color: #c792ea;
} /* Keyword declarations */
.highlight .kt {
    color: #82aaff;
} /* Keyword types */
.highlight .s {
    color: #c3e88d;
} /* Strings */
.highlight .c1 {
    color: #546e7a;
    font-style: italic;
} /* Comments */
.highlight .cm {
    color: #546e7a;
    font-style: italic;
} /* Multi-line comments */
.highlight .n {
    color: #eeffff;
} /* Names */
.highlight .nf {
    color: #82aaff;
} /* Function names */
.highlight .nb {
    color: #ff6b9d;
} /* Built-in names */
.highlight .o {
    color: #89ddff;
} /* Operators */
.highlight .p {
    color: #89ddff;
} /* Punctuation */
.highlight .m {
    color: #f78c6c;
} /* Numbers */
.highlight .mi {
    color: #f78c6c;
} /* Integers */
.highlight .mf {
    color: #f78c6c;
} /* Floats */
.highlight .err {
    color: #ff5370;
    background: none;
} /* Errors */
```

## sass/style.scss
```
// Color Palette - Matching your Ignitia flame logo
:root {
  // Primary colors (flame orange/red)
  --color-primary: #ff6b35;
  --color-primary-dark: #e55a2b;
  --color-primary-light: #ff8f6b;
  --color-secondary: #ff4500;
  --color-accent: #ff8c42;

  // Neutral colors
  --color-dark: #1a1a1a;
  --color-dark-light: #2d2d2d;
  --color-gray: #666666;
  --color-gray-light: #999999;
  --color-light: #f8f9fa;
  --color-white: #ffffff;

  // Background colors
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-dark: #1a1a1a;
  --bg-code: #2d3748;

  // Text colors
  --text-primary: #2d3748;
  --text-secondary: #4a5568;
  --text-light: #ffffff;

  // Border colors
  --border-light: #e2e8f0;
  --border-dark: #2d3748;

  // Shadow
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

  // Fonts
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Menlo, monospace;

  // Spacing
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  // Border radius
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  // Container widths
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

}

// Copy button styles
.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-mono);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: var(--color-primary);
  }

  &.copied {
    background: var(--color-primary);
    color: white;
  }
}

// TOC toggle styles
.toc-toggle {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-left: var(--space-sm);
  transition: transform 0.3s ease;

  &.collapsed {
    transform: rotate(-90deg);
  }
}

.toc-content {
  overflow: scroll;
  transition: max-height 0.3s ease;


  &.collapsed {
    max-height: 0;
  }

  &.expanded {
    max-height: 500px;
  }
}

// Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Navigation
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-light);
  z-index: 1000;
  padding: 0.75rem 0;

  .nav-container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-brand {
    .brand-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      text-decoration: none;
      color: var(--text-primary);

      .logo-flame {
        font-size: 1.75rem;
        filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.3));
      }

      .brand-text {
        display: flex;
        flex-direction: column;

        .brand-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1;
        }
      }
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: var(--space-lg);

    .nav-link {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;

      &:hover {
        color: var(--color-primary);
      }

      &.github-link {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: var(--radius-md);
        background: var(--color-dark);
        color: var(--color-white);

        &:hover {
          background: var(--color-primary);
        }

        .github-icon {
          width: 18px;
          height: 18px;
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;

    span {
      width: 20px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}

// Hero Section
.hero {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 100%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
    z-index: 0;
  }

  .hero-container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3xl);
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }
  }

  .hero-content {
    .hero-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      background: rgba(255, 107, 53, 0.1);
      border: 1px solid rgba(255, 107, 53, 0.2);
      border-radius: 2rem;
      margin-bottom: var(--space-lg);

      .badge-text {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-primary);
      }
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: var(--space-lg);
      display: flex;
      align-items: center;
      gap: var(--space-md);

      .hero-flame {
        font-size: 4rem;
        filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.4));
      }

      .hero-ignitia {
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;

        .hero-flame {
          font-size: 3rem;
        }
      }
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: var(--space-2xl);
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: var(--space-md);

      @media (max-width: 640px) {
        flex-direction: column;
      }
    }
  }

  .hero-code {
    .code-window {
      background: var(--bg-code);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-xl);

      .code-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: #1a202c;
        border-bottom: 1px solid #2d3748;

        .code-dots {
          display: flex;
          gap: 0.5rem;

          span {
            width: 12px;
            height: 12px;
            border-radius: 50%;

            &:nth-child(1) { background: #ff5f57; }
            &:nth-child(2) { background: #ffbd2e; }
            &:nth-child(3) { background: #28ca42; }
          }
        }

        .code-title {
          color: #a0aec0;
          font-family: var(--font-mono);
          font-size: 0.875rem;
        }
      }

      .code-content {
        padding: 1.5rem;
        overflow-x: auto;

        pre {
          margin: 0;

          code {
            font-family: var(--font-mono);
            font-size: 0.875rem;
            line-height: 1.6;
            color: #e2e8f0;
          }
        }
      }
    }
  }
}

// Buttons
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  .btn-icon {
    width: 18px;
    height: 18px;
  }

  &.btn-primary {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--color-white);
    box-shadow: var(--shadow-md);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }

  &.btn-secondary {
    background: var(--color-white);
    color: var(--text-primary);
    border: 2px solid var(--border-light);

    &:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }
  }
}

// Features Section
.features {
  padding: 6rem 0;
  background: var(--bg-secondary);

  .features-container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .section-header {
    text-align: center;
    margin-bottom: var(--space-3xl);

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-md);
      color: var(--text-primary);
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-xl);

    .feature-card {
      background: var(--bg-primary);
      padding: var(--space-xl);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: var(--space-lg);
        filter: drop-shadow(0 0 10px rgba(255, 107, 53, 0.2));
      }

      .feature-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: var(--space-md);
        color: var(--text-primary);
      }

      .feature-description {
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }
  }
}

// Quick Start Section
.quickstart {
  padding: 6rem 0;

  .quickstart-container {
    max-width: var(--container-lg);
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .quickstart-content {
    text-align: center;

    .quickstart-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-md);
      color: var(--text-primary);
    }

    .quickstart-subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: var(--space-3xl);
    }
  }

  .quickstart-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-xl);

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .step-number {
        width: 3rem;
        height: 3rem;
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
        color: var(--color-white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: var(--space-lg);
      }

      .step-content {
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--text-primary);
        }

        .code-snippet {
          position: relative;
          background: var(--bg-code);
          padding: 1rem;
          border-radius: var(--radius-md);
          margin: var(--space-md) 0;

          code {
            font-family: var(--font-mono);
            color: #e2e8f0;
            font-size: 0.875rem;
            line-height: 1.6;
          }

          .copy-btn {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            color: #a0aec0;
            cursor: pointer;
            padding: 0.25rem;
            border-radius: var(--radius-sm);

            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }
          }
        }

        p {
          color: var(--text-secondary);
          line-height: 1.6;

          code {
            background: var(--bg-secondary);
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius-sm);
            font-family: var(--font-mono);
            font-size: 0.875rem;
            color: var(--color-primary);
          }
        }
      }
    }
  }
}

// Footer
.footer {
  background: var(--bg-dark);
  color: var(--color-white);
  padding: var(--space-3xl) 0 var(--space-md);

  .footer-container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);

          .footer-links {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
      }
  }

  .footer-container:first-child {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-2xl);
    margin-bottom: var(--space-2xl);

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }
  }

  .footer-brand {
    .footer-logo {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin-bottom: var(--space-md);

      .logo-flame {
        font-size: 1.5rem;
        filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.3));
      }

      .footer-brand-name {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--color-primary);
      }

    }

    .footer-description {
      color: #a0aec0;
      line-height: 1.6;
      max-width: 300px;
    }
  }

  .footer-section {
    h4 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: var(--space-md);
      color: var(--color-white);
    }

    ul {
      list-style: none;

      li {
        margin-bottom: var(--space-sm);

        a {
          color: #a0aec0;
          text-decoration: none;
          transition: color 0.2s ease;

          &:hover {
            color: var(--color-primary);
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #2d3748;
    padding-top: var(--space-md);

    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 640px) {
        flex-direction: column;
        gap: var(--space-sm);
      }

      p {
        color: #a0aec0;
        font-size: 0.875rem;
      }

      .footer-version {
        font-family: var(--font-mono);
        color: var(--color-primary);
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;

    .hero-container {
      padding: 0 var(--space-md);
    }
  }

  .features, .quickstart {
    padding: 4rem 0;
  }

  .section-title, .quickstart-title {
    font-size: 2rem;
  }
}

// Utility classes
.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.text-center { text-align: center; }
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--text-secondary); }

.mb-0 { margin-bottom: 0; }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }


// Docs Layout
.docs-container {
  display: flex;
  min-height: calc(100vh - 80px); // Adjust based on navbar height
  max-width: none;
  margin-top: 80px; // Adjust based on navbar height

  @media (max-width: 968px) {
    flex-direction: column;
  }
}

.docs-sidebar {
  width: 280px;
  min-width: 280px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-light);
  padding: var(--space-lg);
  overflow-y: auto;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;

  @media (max-width: 968px) {
    width: 100%;
    min-width: unset;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid var(--border-light);
  }

  .sidebar-header h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
}

.search-container {
  position: relative;
  margin-bottom: var(--space-lg);

  #search-input {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    background: var(--bg-primary);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.1);
    }
  }

  .search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    margin-top: var(--space-xs);
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
    display: none;

    &.active {
      display: block;
    }

    .search-result {
      padding: var(--space-sm) var(--space-md);
      border-bottom: 1px solid var(--border-light);
      cursor: pointer;

      &:hover {
        background: var(--bg-secondary);
      }

      &:last-child {
        border-bottom: none;
      }

      .result-title {
        font-weight: 600;
        color: var(--text-primary);
        font-size: 0.875rem;
      }

      .result-snippet {
        font-size: 0.75rem;
        color: var(--text-secondary);
        margin-top: var(--space-xs);
      }
    }
  }
}

.sidebar-nav {
  .nav-section {
    margin-bottom: var(--space-lg);

    .nav-title {
      display: block;
      font-weight: 600;
      color: var(--text-primary);
      text-decoration: none;
      padding: var(--space-sm) 0;
      font-size: 0.875rem;
      border-bottom: 1px solid var(--border-light);
      margin-bottom: var(--space-sm);

      &:hover {
        color: var(--color-primary);
      }

      &.active {
        color: var(--color-primary);
        font-weight: 700;
      }
    }
  }

  .nav-pages {
    list-style: none;
    margin: 0;
    padding-left: var(--space-md);

    li {
      margin-bottom: var(--space-sm);
    }

    .nav-page {
      display: block;
      text-decoration: none;
      color: var(--text-secondary);
      font-size: 0.875rem;
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--radius-sm);
      transition: all 0.2s ease;

      &:hover {
        color: var(--color-primary);
        background: rgba(255, 107, 53, 0.05);
      }

      &.active {
        color: var(--color-primary);
        background: rgba(255, 107, 53, 0.1);
        font-weight: 600;
      }
    }
  }
}

.docs-content {
  flex: 1;
  padding: var(--space-lg);
  max-width: calc(100vw - 280px);

  @media (max-width: 968px) {
    max-width: 100vw;
    padding: var(--space-md);
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  font-size: 0.875rem;

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .breadcrumb-separator {
    color: var(--text-secondary);
  }

  .breadcrumb-current {
    color: var(--text-secondary);
    font-weight: 600;
  }
}

.docs-header {
  margin-bottom: var(--space-2xl);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border-light);

  .docs-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: var(--space-md);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .docs-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
  }

  .docs-meta {
    display: flex;
    gap: var(--space-lg);
    font-size: 0.875rem;
    color: var(--text-secondary);

    @media (max-width: 640px) {
      flex-direction: column;
      gap: var(--space-sm);
    }

    span {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }
  }
}

.content-with-toc {
  display: grid;
  // grid-template-columns: 1fr 250px;
  gap: var(--space-2xl);
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

.toc-container {
  background: var(--bg-secondary);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);


  @media (max-width: 1200px) {
    margin-bottom: var(--space-lg);
    order: -1;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  .toc {
    ul {
      list-style: none;
      margin: 0;
      padding-left: var(--space-md);

      &:first-child {
        padding-left: 0;
      }

      li {
        margin-bottom: var(--space-sm);

        a {
          display: block;
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;

          &:hover {
            color: var(--color-primary);
            background: rgba(255, 107, 53, 0.05);
          }
        }
      }
    }
  }
}

.prose {
  max-width: none;

  // Ensure TOC doesn't overlap content on smaller screens
  @media (max-width: 1200px) {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 700;
    line-height: 1.3;
    margin-top: var(--space-xl);
    margin-bottom: var(--space-md);

    &:first-child {
      margin-top: 0;
    }

    a.zola-anchor {
      color: var(--color-primary);
      opacity: 0;
      transition: opacity 0.2s ease;
      margin-left: var(--space-sm);
      text-decoration: none;

      &:hover {
        opacity: 1;
      }
    }

    &:hover a.zola-anchor {
      opacity: 1;
    }
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  p {
    margin-bottom: var(--space-md);
    color: var(--text-secondary);
  }

  pre {
    background: var(--bg-code);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin: var(--space-lg) 0;

    code {
      background: none;
      color: #e2e8f0;
      font-family: var(--font-mono);
      font-size: 0.875rem;
    }
  }

  code {
    background: var(--bg-secondary);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: var(--space-lg);
    margin: var(--space-lg) 0;
    font-style: italic;
    color: var(--text-secondary);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--space-lg) 0;

    th, td {
      padding: var(--space-sm) var(--space-md);
      text-align: left;
      border: 1px solid var(--border-light);
    }

    th {
      background: var(--bg-secondary);
      font-weight: 600;
      color: var(--text-primary);
    }

    td {
      color: var(--text-secondary);
    }
  }
}

.section-pages, .subsections {
  margin-top: var(--space-3xl);

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: var(--space-lg);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
}

.pages-grid, .subsections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.page-card, .subsection-card {
  background: var(--bg-secondary);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);

    a {
      color: var(--text-primary);
      text-decoration: none;

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  p {
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
  }

  .page-meta, .subsection-meta {
    display: flex;
    gap: var(--space-md);
    font-size: 0.875rem;
    color: var(--text-secondary);

    span {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }
  }
}

.docs-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-3xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border-light);

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-md);
  }

  .nav-prev, .nav-next {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
      border-color: var(--color-primary);
    }
  }
}

.edit-page {
  margin-top: var(--space-lg);
  text-align: center;

  .edit-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-lg);
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.875rem;
    transition: all 0.2s ease;

    &:hover {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
}

// 404 Error Page
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 160px);
  padding: var(--space-lg);

  .error-content {
    max-width: 600px;
    text-align: center;

    .error-graphic {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-lg);
      margin-bottom: var(--space-2xl);

      .flame-404 {
        font-size: 4rem;
        filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.4));
      }

      .error-code {
        font-size: 6rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
      }
    }

    .error-message {
      margin-bottom: var(--space-2xl);

      h2 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: var(--space-md);
      }

      p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }

    .error-actions {
      display: flex;
      gap: var(--space-md);
      justify-content: center;
      margin-bottom: var(--space-2xl);

      @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .error-search {
      margin-bottom: var(--space-2xl);

      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--space-md);
      }

      .search-container {
        max-width: 400px;
        margin: 0 auto;
      }
    }

    .error-suggestions {
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--space-md);
      }

      .suggestion-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-md);
        justify-content: center;

        @media (max-width: 640px) {
          flex-direction: column;
          align-items: center;
        }

        a {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
          padding: var(--space-sm) var(--space-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--text-primary);
          font-size: 0.875rem;
          transition: all 0.2s ease;

          &:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
          }
        }
      }
    }
  }
}

// Body classes for different page types
body.docs-section, body.docs-page {
  .navbar {
    box-shadow: var(--shadow-sm);
  }
}
```

## static/js/main.js
```
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
```

## static/js/search.js
```
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
        '<div class="search-result">No results found</div>';
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
                <div class="search-result" data-index="${index}" data-url="${doc.permalink}">
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
```

## templates/404.md
```
{% extends "base.html" %} {% block body_class %}error-404{% endblock %} {% block
title %}404 - Page Not Found - {{ config.title }}{% endblock %} {% block content
%}
<div class="error-container">
    <div class="error-content">
        <div class="error-graphic">
            <div class="flame-404">🔥</div>
            <h1 class="error-code">404</h1>
        </div>

        <div class="error-message">
            <h2>Page Not Found</h2>
            <p>
                The page you're looking for seems to have vanished into the
                digital void. Don't worry, even the best frameworks have their
                mysteries!
            </p>
        </div>

        <div class="error-actions">
            <a href="{{ get_url(path='') }}" class="btn btn-primary">
                🏠 Go Home
            </a>
            <a href="{{ get_url(path='docs') }}" class="btn btn-secondary">
                📚 Browse Docs
            </a>
        </div>

        <div class="error-search">
            <h3>Or search for what you need:</h3>
            <div class="search-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search documentation..."
                    autocomplete="off"
                />
                <div id="search-results" class="search-results"></div>
            </div>
        </div>

        <div class="error-suggestions">
            <h3>Popular Pages:</h3>
            <ul class="suggestion-list">
                <li><a href="/docs/getting-started/">🚀 Getting Started</a></li>
                <li><a href="/docs/installation/">⚙️ Installation</a></li>
                <li><a href="/docs/routing/">🛣️ Routing</a></li>
                <li><a href="/docs/examples/">📖 Examples</a></li>
            </ul>
        </div>
    </div>
</div>
{% endblock %} {% block extra_scripts %}
<script src="{{ get_url(path='js/search.js') }}"></script>
{% endblock %}
```

## templates/page.html
```
{% extends "base.html" %} {% block body_class %}docs-page{% endblock %} {% block
title %}{{ page.title }} - {{ config.title }}{% endblock %} {% block description
%}{{ page.description | default(value=config.description) }}{% endblock %} {%
block content %}
<!-- Docs Layout -->
<div class="docs-container">
    <!-- Sidebar -->
    <aside class="docs-sidebar">
        <div class="sidebar-header">
            <h3>📚 Documentation</h3>
        </div>

        <!-- Search Box -->
        <div class="search-container">
            <input
                type="text"
                id="search-input"
                placeholder="Search docs..."
                autocomplete="off"
            />
            <div id="search-results" class="search-results"></div>
        </div>

        <!-- Navigation Tree -->
        <nav class="sidebar-nav">
            {% set docs_section = get_section(path="docs/_index.md") %} {% if
            docs_section %}
            <!-- Main docs section -->
            <div class="nav-section">
                <a href="{{ docs_section.permalink }}" class="nav-title">
                    🏠 {{ docs_section.title }}
                </a>
            </div>

            <!-- Subsections and pages -->
            {% for subsection_path in docs_section.subsections %} {% set
            subsection = get_section(path=subsection_path) %}
            <div class="nav-section">
                <a
                    href="{{ subsection.permalink }}"
                    class="nav-title {% if current_path is starts_with(subsection.path) %}active{% endif %}"
                >
                    📂 {{ subsection.title }}
                </a>

                <!-- Pages in this subsection -->
                {% if subsection.pages %}
                <ul class="nav-pages">
                    {% for p in subsection.pages %}
                    <li>
                        <a
                            href="{{ p.permalink }}"
                            class="nav-page {% if current_path == p.path %}active{% endif %}"
                        >
                            📄 {{ p.title }}
                        </a>
                    </li>
                    {% endfor %}
                </ul>
                {% endif %}
            </div>
            {% endfor %}

            <!-- Direct pages in docs root -->
            {% if docs_section.pages %}
            <div class="nav-section">
                <span class="nav-title">📑 Pages</span>
                <ul class="nav-pages">
                    {% for p in docs_section.pages %}
                    <li>
                        <a
                            href="{{ p.permalink }}"
                            class="nav-page {% if current_path == p.path %}active{% endif %}"
                        >
                            📄 {{ p.title }}
                        </a>
                    </li>
                    {% endfor %}
                </ul>
            </div>
            {% endif %} {% endif %}
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="docs-content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
            <a href="/">🏠 Home</a>
            <span class="breadcrumb-separator">></span>
            <a href="/docs/">📚 Docs</a>
            {% for ancestor in page.ancestors %} {% set ancestor_section =
            get_section(path=ancestor) %}
            <span class="breadcrumb-separator">></span>
            <a href="{{ ancestor_section.permalink }}"
                >{{ ancestor_section.title }}</a
            >
            {% endfor %}
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-current">{{ page.title }}</span>
        </nav>

        <!-- Page Header -->
        <header class="docs-header">
            <h1 class="docs-title">{{ page.title }}</h1>
            {% if page.description %}
            <p class="docs-description">{{ page.description }}</p>
            {% endif %}

            <!-- Page Meta -->
            <div class="docs-meta">
                <span class="reading-time"
                    >⏱️ {{ page.reading_time }} min read</span
                >
                <span class="word-count">📝 {{ page.word_count }} words</span>
                {% if page.date %}
                <span class="date"
                    >📅 Updated {{ page.date | date(format="%Y-%m-%d") }}</span
                >
                {% endif %}
            </div>
        </header>

        <!-- Content with TOC -->
        <div class="content-with-toc">
            <!-- Table of Contents -->
            {% if page.toc %}
            <div class="toc-container">
                <h3>📋 Table of Contents</h3>
                <nav class="toc">
                    <ul>
                        {% for h1 in page.toc %}
                        <li>
                            <a href="{{ h1.permalink | safe }}"
                                >{{ h1.title }}</a
                            >
                            {% if h1.children %}
                            <ul>
                                {% for h2 in h1.children %}
                                <li>
                                    <a href="{{ h2.permalink | safe }}"
                                        >{{ h2.title }}</a
                                    >
                                    {% if h2.children %}
                                    <ul>
                                        {% for h3 in h2.children %}
                                        <li>
                                            <a href="{{ h3.permalink | safe }}"
                                                >{{ h3.title }}</a
                                            >
                                        </li>
                                        {% endfor %}
                                    </ul>
                                    {% endif %}
                                </li>
                                {% endfor %}
                            </ul>
                            {% endif %}
                        </li>
                        {% endfor %}
                    </ul>
                </nav>
            </div>
            {% endif %}

            <!-- Page Content -->
            <div class="prose">{{ page.content | safe }}</div>
        </div>

        <!-- Navigation -->
        <nav class="docs-navigation">
            {% if page.lower %}
            <a href="{{ page.lower.permalink }}" class="nav-prev">
                ← {{ page.lower.title }}
            </a>
            {% endif %} {% if page.higher %}
            <a href="{{ page.higher.permalink }}" class="nav-next">
                {{ page.higher.title }} →
            </a>
            {% endif %}
        </nav>

        <!-- Edit on GitHub -->
        <div class="edit-page">
            <a
                href="{{ config.extra.github_url }}/edit/main/content/{{ page.relative_path }}"
                target="_blank"
                class="edit-link"
            >
                ✏️ Edit this page on GitHub
            </a>
        </div>
    </main>
</div>
{% endblock %} {% block extra_scripts %}
<script src="{{ get_url(path='js/search.js') }}"></script>
{% endblock %}
```

## templates/section.html
```
{% extends "base.html" %} {% block body_class %}docs-section{% endblock %} {%
block title %}{{ section.title }} - {{ config.title }}{% endblock %} {% block
description %}{{ section.description | default(value=config.description) }}{%
endblock %} {% block content %}
<!-- Docs Layout -->
<div class="docs-container">
    <!-- Sidebar -->
    <aside class="docs-sidebar">
        <div class="sidebar-header">
            <h3>📚 Documentation</h3>
        </div>

        <!-- Search Box -->
        <div class="search-container">
            <input
                type="text"
                id="search-input"
                placeholder="Search docs..."
                autocomplete="off"
            />
            <div id="search-results" class="search-results"></div>
        </div>

        <!-- Navigation Tree -->
        <nav class="sidebar-nav">
            {% set docs_section = get_section(path="docs/_index.md") %} {% if
            docs_section %}
            <!-- Main docs section -->
            <div class="nav-section">
                <a
                    href="{{ docs_section.permalink }}"
                    class="nav-title {% if current_path == docs_section.path %}active{% endif %}"
                >
                    🏠 {{ docs_section.title }}
                </a>
            </div>

            <!-- Subsections and pages -->
            {% for subsection_path in docs_section.subsections %} {% set
            subsection = get_section(path=subsection_path) %}
            <div class="nav-section">
                <a
                    href="{{ subsection.permalink }}"
                    class="nav-title {% if current_path is starts_with(subsection.path) %}active{% endif %}"
                >
                    📂 {{ subsection.title }}
                </a>

                <!-- Pages in this subsection -->
                {% if subsection.pages %}
                <ul class="nav-pages">
                    {% for page in subsection.pages %}
                    <li>
                        <a
                            href="{{ page.permalink }}"
                            class="nav-page {% if current_path == page.path %}active{% endif %}"
                        >
                            📄 {{ page.title }}
                        </a>
                    </li>
                    {% endfor %}
                </ul>
                {% endif %}
            </div>
            {% endfor %}

            <!-- Direct pages in docs root -->
            {% if docs_section.pages %}
            <div class="nav-section">
                <span class="nav-title">📑 Pages</span>
                <ul class="nav-pages">
                    {% for page in docs_section.pages %}
                    <li>
                        <a
                            href="{{ page.permalink }}"
                            class="nav-page {% if current_path == page.path %}active{% endif %}"
                        >
                            📄 {{ page.title }}
                        </a>
                    </li>
                    {% endfor %}
                </ul>
            </div>
            {% endif %} {% endif %}
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="docs-content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb">
            <a href="/">🏠 Home</a>
            <span class="breadcrumb-separator">></span>
            <a href="/docs/">📚 Docs</a>
            <!--{% for ancestor in section.ancestors %} {% set ancestor_section =
            get_section(path=ancestor) %}-->
            <!--<span class="breadcrumb-separator">></span>-->
            <a href="{{ ancestor_section.permalink }}"
                >{{ ancestor_section.title }}</a
            >
            {% endfor %}
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-current">{{ section.title }}</span>
        </nav>

        <!-- Page Header -->
        <header class="docs-header">
            <h1 class="docs-title">{{ section.title }}</h1>
            {% if section.description %}
            <p class="docs-description">{{ section.description }}</p>
            {% endif %}

            <!-- Page Meta -->
            <div class="docs-meta">
                <span class="reading-time"
                    >⏱️ {{ section.reading_time }} min read</span
                >
                <span class="word-count"
                    >📝 {{ section.word_count }} words</span
                >
            </div>
        </header>

        <!-- Table of Contents -->
        {% if section.toc %}
        <div class="toc-container" style="margin-bottom: 2rem">
            <h3>📋 Table of Contents</h3>
            <nav class="toc">
                <ul>
                    {% for h1 in section.toc %}
                    <li>
                        <a href="{{ h1.permalink | safe }}">{{ h1.title }}</a>
                        {% if h1.children %}
                        <ul>
                            {% for h2 in h1.children %}
                            <li>
                                <a href="{{ h2.permalink | safe }}"
                                    >{{ h2.title }}</a
                                >
                                {% if h2.children %}
                                <ul>
                                    {% for h3 in h2.children %}
                                    <li>
                                        <a href="{{ h3.permalink | safe }}"
                                            >{{ h3.title }}</a
                                        >
                                    </li>
                                    {% endfor %}
                                </ul>
                                {% endif %}
                            </li>
                            {% endfor %}
                        </ul>
                        {% endif %}
                    </li>
                    {% endfor %}
                </ul>
            </nav>
        </div>
        {% endif %}

        <!-- Section Content -->
        <div class="prose">{{ section.content | safe }}</div>

        <!-- Section Pages -->
        {% if section.pages %}
        <section class="section-pages">
            <h2>📋 Pages in this Section</h2>
            <div class="pages-grid">
                {% for page in section.pages %}
                <article class="page-card">
                    <h3><a href="{{ page.permalink }}">{{ page.title }}</a></h3>
                    {% if page.description %}
                    <p>{{ page.description }}</p>
                    {% elif page.summary %}
                    <p>{{ page.summary | safe }}</p>
                    {% endif %}
                    <div class="page-meta">
                        <span class="reading-time"
                            >⏱️ {{ page.reading_time }} min</span
                        >
                        {% if page.date %}
                        <span class="date"
                            >📅 {{ page.date | date(format="%Y-%m-%d") }}</span
                        >
                        {% endif %}
                    </div>
                </article>
                {% endfor %}
            </div>
        </section>
        {% endif %}

        <!-- Subsections -->
        {% if section.subsections %}
        <section class="subsections">
            <h2>📂 Subsections</h2>
            <div class="subsections-grid">
                {% for subsection_path in section.subsections %} {% set
                subsection = get_section(path=subsection_path) %}
                <article class="subsection-card">
                    <h3>
                        <a href="{{ subsection.permalink }}"
                            >📂 {{ subsection.title }}</a
                        >
                    </h3>
                    {% if subsection.description %}
                    <p>{{ subsection.description }}</p>
                    {% endif %}
                    <div class="subsection-meta">
                        <span class="page-count"
                            >📄 {{ subsection.pages | length }} pages</span
                        >
                    </div>
                </article>
                {% endfor %}
            </div>
        </section>
        {% endif %}

        <!-- Navigation -->
        <nav class="docs-navigation">
            {% if section.lower %}
            <a href="{{ section.lower.permalink }}" class="nav-prev">
                ← {{ section.lower.title }}
            </a>
            {% endif %} {% if section.higher %}
            <a href="{{ section.higher.permalink }}" class="nav-next">
                {{ section.higher.title }} →
            </a>
            {% endif %}
        </nav>
    </main>
</div>
{% endblock %} {% block extra_scripts %}
<script src="{{ get_url(path='js/search.js') }}"></script>
{% endblock %}
```

## content/_index.md
```
+++
title = "Ignitia"
description = "A blazing fast, lightweight Rust Web Framework"
+++

# Ignitia

![Ignitia Logo](./assets/ignitia-logo.jpg)

A blazing fast, lightweight, and modern **Rust Web Framework** that ignites your development journey. Build high-performance APIs and real-time web applications with zero compromise, best-in-class developer ergonomics, and cutting-edge async runtimes.

---

![Ignitia Banner](./assets/ignitia-banner.jpg)

## Why Ignitia?

- Extremely fast HTTP server and router with async support
- Intuitive middleware system for logging, compression, CORS, auth, and more
- Advanced WebSocket and multipart form support
- Modular, scalable, and configurable for both microservices and monoliths
- Inspired by real-world frameworks, focused on modern Rust best practices

## Features

- Full async/await support (Tokio, Hyper)
- RESTful routing with path/query/body extractors
- Built-in middleware: Logger, CORS, rate limiting, security headers, etc.
- Multipart file upload and streaming
- WebSocket routing and batch/message handlers
- Typed errors, custom error handling, and detailed diagnostics
- Easy integration with databases, state, and 3rd party libraries
- TLS and HTTP/2 support out of the box

## Get Started

```
cargo add ignitia
```

## Example

```rust
use ignitia::{Router, Response};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .get("/", || async { Ok(Response::text("Welcome to Ignitia!")) });

    ignitia::Server::new(app, "127.0.0.1:8000".parse().unwrap())
        .ignitia()
        .await
        .unwrap();
}
```

## Documentation

- [Getting Started](./getting-started.md)
- [API Reference](./api.md)
- [Middleware](./middleware.md)
- [Examples](./examples.md)
- [FAQ](./faq.md)

---

Built by [Aarambh Dev Hub](https://github.com/AarambhDevHub) & the Rust community.
```
