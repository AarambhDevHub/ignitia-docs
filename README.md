# 🔥 Ignitia Documentation Website

A blazing fast, modern documentation website for **Ignitia** - the high-performance Rust web framework. Built with [Zola](https://www.getzola.org/) static site generator and deployed on GitHub Pages.

✨ Features

- **🚀 Blazing Fast**: Static site generation with Zola
- **📱 Responsive Design**: Mobile-first, modern UI
- **🔍 Full-Text Search**: Client-side search with Elasticlunr
- **🎨 Custom Theme**: Beautiful flame-inspired design matching Ignitia branding
- **📖 Comprehensive Docs**: Complete documentation structure
- **⚡ Performance Optimized**: Minified HTML, optimized assets
- **🔄 Auto Deployment**: GitHub Actions CI/CD pipeline
- **💻 Developer Friendly**: Easy to contribute and maintain

## 🛠️ Tech Stack

- **Static Site Generator**: [Zola](https://www.getzola.org/)
- **Styling**: SCSS with modern CSS variables
- **Search**: Elasticlunr.js for client-side search
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: Emoji and SVG icons
- **Fonts**: Inter (Google Fonts)

## 🚀 Quick Start

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (v0.18.0 or later)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AarambhDevHub/ignitia-docs.git
   cd ignitia-docs
   ```

2. **Install Zola** (if not already installed)
   ```bash
   # On macOS with Homebrew
   brew install zola

   # On Ubuntu/Debian
   sudo snap install --edge zola

   # On Windows with Chocolatey
   choco install zola
   ```

3. **Start development server**
   ```bash
   zola serve
   ```

4. **Open in browser**
   ```
   http://127.0.0.1:1111
   ```

## 📁 Project Structure

```
ignitia-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── content/
│   ├── _index.md              # Homepage content
│   └── docs/                  # Documentation pages
│       ├── _index.md
│       ├── installation.md
│       └── ...
├── static/
│   ├── images/                # Logo and assets
│   ├── js/
│   │   ├── main.js           # Main JavaScript
│   │   └── search.js         # Search functionality
│   ├── css/
│   │   └── syntax.css        # Code syntax highlighting
│   ├── favicon.ico
│   └── robots.txt
├── templates/
│   ├── base.html             # Base template
│   ├── index.html            # Homepage template
│   ├── page.html             # Page template
│   ├── section.html          # Section template
│   └── 404.html              # 404 error page
├── sass/
│   └── style.scss            # Main stylesheet
├── themes/
│   └── ignitia-theme/
│       └── theme.toml        # Theme configuration
├── config.toml               # Zola configuration
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary**: `#ff6b35` (Flame Orange)
- **Secondary**: `#ff4500` (Fire Red)
- **Accent**: `#ff8c42` (Light Orange)
- **Text**: `#2d3748` (Dark Gray)
- **Background**: `#ffffff` (White)
- **Code**: `#2d3748` (Dark)

### Typography

- **Primary Font**: Inter (Sans-serif)
- **Monospace**: JetBrains Mono, Fira Code

## 🔧 Development

### Adding New Documentation

1. **Create a new markdown file** in `content/docs/`
2. **Add frontmatter**:
   ```markdown
   +++
   title = "Your Page Title"
   description = "Page description for SEO"
   weight = 10
   +++

   # Your Content Here
   ```

3. **Build and test locally**:
   ```bash
   zola serve
   ```

### Customizing Styles

1. **Edit SCSS files** in `sass/`
2. **Zola automatically rebuilds** CSS during development
3. **Use CSS custom properties** for consistent theming

### Search Configuration

- Search is powered by **Elasticlunr.js**
- Configured in `config.toml` under `[search]`
- Search index builds automatically
- Client-side JavaScript in `static/js/search.js`

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push changes**:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push origin main
   ```

3. **Monitor deployment** in Actions tab

### Manual Deployment

```bash
# Build the site
zola build

# Deploy to your hosting provider
# (upload contents of `public/` folder)
```

## 📝 Content Guidelines

### Writing Documentation

- **Use clear, concise language**
- **Include code examples** for technical concepts
- **Add proper headings** for navigation
- **Use emoji sparingly** for visual appeal
- **Test all code examples**

### Markdown Features

- ✅ **Syntax highlighting** for Rust and other languages
- ✅ **Tables** with proper styling
- ✅ **Callouts** using blockquotes
- ✅ **Internal linking** with Zola shortcodes
- ✅ **Table of contents** auto-generation

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test locally**:
   ```bash
   zola serve
   ```
5. **Commit your changes**:
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines

- 📖 **Documentation**: Improve existing docs or add new sections
- 🎨 **Design**: Enhance UI/UX and visual elements
- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **Features**: Add new functionality
- 🔧 **Performance**: Optimize loading and build times

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **🌐 Live Website**: [https://aarambhdevhub.github.io/ignitia-docs](https://aarambhdevhub.github.io/ignitia-docs)
- **📦 Ignitia Framework**: [https://github.com/AarambhDevHub/ignitia](https://github.com/AarambhDevHub/ignitia)
- **🎥 YouTube Channel**: [https://www.youtube.com/@AarambhDevHub](https://www.youtube.com/@AarambhDevHub)
- **💼 LinkedIn**: [https://linkedin.com/in/darshan-vichhi-rust-developer](https://linkedin.com/in/darshan-vichhi-rust-developer)

## 🏗️ Built With

- **[Zola](https://www.getzola.org/)** - Fast static site generator
- **[GitHub Pages](https://pages.github.com/)** - Free hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern typography
- **[Elasticlunr.js](http://elasticlunr.com/)** - Client-side search

## 📊 Performance

- ⚡ **Lighthouse Score**: 100/100
- 🚀 **Load Time**: < 1s
- 📱 **Mobile Friendly**: Yes
- 🔍 **SEO Optimized**: Yes
- ♿ **Accessibility**: WCAG 2.1 AA

## 🆘 Troubleshooting

### Common Issues

**Zola not found**
```bash
# Install Zola
curl -sL https://github.com/getzola/zola/releases/download/v0.18.0/zola-v0.18.0-x86_64-unknown-linux-gnu.tar.gz | tar xz
```

**Build fails**
```bash
# Check Zola version
zola --version

# Clean and rebuild
rm -rf public/
zola build
```

**Search not working**
- Ensure `build_search_index = true` in `config.toml`
- Check browser console for JavaScript errors
- Verify search index is generated in `public/search_index.en.js`

***

**Made with ❤️ by [Aarambh Dev Hub](https://github.com/AarambhDevHub)**

*Igniting your web development journey with Rust! 🔥*
