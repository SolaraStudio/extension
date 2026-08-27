# Solara Extensions

Extension system for Solara Browser.

Extensions add functionality to Solara Browser. They can modify web pages, interact with the browser API, store data, and more.

---

## Quick Links

- [Documentation](docs/)
- [Contributing Guide](docs/contributing/CONTRIBUTING.md)
- [Rules](docs/RULES.md)
- [FAQ](docs/faq/FAQ.md)
- [Development Guide](docs/guide/DEVELOPMENT.md)

---

## Repository Structure

```
extension/
├── extensions/           # All extensions
│   ├── official/         # Built-in, maintained by SolaraStudio
│   └── community/        # Community submissions
├── src/                  # Core extension engine
├── docs/                 # Documentation
├── schema/               # JSON schemas
└── dist/                 # Auto-generated (do not edit)
```

---

## Installation

Extensions are installed through the Solara Browser extension manager. Community extensions are available after they are merged and published.

---

## Building the Extension Engine

```bash
npm install
npm run build
```

---

## Contributing

We welcome contributions from the community.

1. Fork the repository.
2. Create your extension in extensions/community/.
3. Open a pull request.

Read the Contributing Guide for detailed instructions.

---

## Rules

All extensions must follow the Rules. Please review them before submitting.

---

## License

MPL-2.0

---

## Contact

Open an issue for questions or support.
