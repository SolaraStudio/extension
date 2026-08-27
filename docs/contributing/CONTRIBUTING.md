# Contributing Extensions to Solara

Thank you for your interest in contributing extensions to Solara Browser. This document outlines the process and rules for submitting extensions.

## Repository Structure

```
extension/
├── extensions/           # All extensions go here
│   ├── official/         # Built-in, maintained by Solara Team
│   └── community/        # Community submissions
├── src/                  # Core extension engine
├── docs/contributing/    # Documentation
└── schema/               # JSON schemas
```

## Types of Extensions

| Type | Location | Maintained By | Review Process |
|------|----------|---------------|----------------|
| Official | `extensions/official/` | SolaraStudio | Internal |
| Community | `extensions/community/` | Community | Pull Request |

### File Requirements

| File | Required | Description |
|------|----------|-------------|
| `manifest.json` | Yes | Extension metadata |
| `icon.png` | Yes | 128x128 PNG icon |
| `background.js` | Optional | Background script |
| `content.js` | Optional | Content script (runs in web pages) |
| `styles.css` | Optional | Styles for the extension |
| `README.md` | Optional | Documentation for users |
| `preview.png` | Optional | Screenshot (1280x720) |

### Manifest Rules

```json
{
  "id": "my-extension",           // Required, unique, lowercase, hyphens only
  "name": "My Extension",         // Required, max 50 characters
  "version": "1.0.0",             // Required, semantic versioning
  "author": "your-username",      // Required, GitHub username
  "description": "Description",   // Required, max 200 characters
  "minAppVersion": "1.10.0",      // Required, must be valid version
  "permissions": ["storage"],     // Required, list of permissions
  "hostPermissions": ["<all_urls>"], // Optional
  "background": {                 // Optional
    "scripts": ["background.js"],
    "persistent": false
  },
  "contentScripts": [             // Optional
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ],
  "optionsUi": {                  // Optional
    "page": "options.html",
    "openInTab": false
  },
  "icons": {                      // Required
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
```

## Permissions

| Permission | Description                 |
|------------|-----------------------------|
| `storage` | Access to extension storage |
| `tabs` | Access to tab information |
| `webRequest` | Intercept and modify web requests |
| `cookies` | Access to cookies |
| `bookmarks` | Access to bookmarks |
| `history` | Access to browsing history |
| `downloads` | Access to downloads |
| `notifications` | Show system notifications |
| `alarms` | Schedule background tasks |
| `contextMenus` | Add items to context menu |
| `activeTab` | Access to the active tab |
| `webNavigation` | Observe navigation events |
| `browsingData` | Clear browsing data |
| `management` | Manage extensions |


## How to Submit

### Step 1: Fork the Repository

```
https://github.com/SolaraStudio/extension
```

Click Fork and create a copy under your account.

### Step 2: Create a Branch

```bash
git checkout -b add-my-extension
```

### Step 3: Create Your Extension

```bash
mkdir -p extensions/community/my-extension
cd extensions/community/my-extension
```

Add the required files.

### Step 4: Test Your Extension

Test your extension locally with Solara before submitting.

### Step 5: Open a Pull Request

1. Push your changes to your fork.
2. Open a pull request against the main branch.
3. Fill out the PR template.

### Step 6: Wait for Review

- CI will validate your extension automatically.
- A maintainer will review your submission.
- If changes are needed, address them and push again.

## Review Process

| Stage | Description |
|-------|-------------|
| `CI Validation` | Automated checks for manifest validity, icon, and uniqueness |
| `Security` | Review Check for malicious code, trackers, or suspicious patterns |
| `Functional` | Review Ensure the extension works as described |
| `Code Quality` | Review Check code style and maintainability |
| `Approval` | Extension is merged and published |

## Validation

CI runs the following checks on every pull request:

- manifest.json is valid JSON and follows the schema
- id is unique (no duplicates)
- icon.png exists and is a valid PNG
- version follows semantic versioning (MAJOR.MINOR.PATCH)
- minAppVersion is a valid version string
- No suspicious code patterns (eval, document.write, etc.)
- No external dependencies without approval

## Code of Conduct

By submitting an extension, you agree to follow our Code of Conduct. Be respectful to maintainers and other contributors.

## License

By contributing, you agree that your extension will be licensed under MPL-2.0.
