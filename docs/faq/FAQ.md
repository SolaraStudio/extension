# Solara Extensions – FAQ

This document answers common questions about contributing to, submitting, and maintaining extensions for Solara Browser.

---

## General Questions

### What is an extension?

An extension is a piece of software that adds functionality to Solara Browser. Extensions can modify web pages, interact with the browser, store data, and more.

### How is an extension different from a mod?

Extensions are written in JavaScript and can interact with web pages and the browser API. Mods are primarily CSS-based and focus on modifying the browser's user interface.

### What technologies are used to build extensions?

Extensions are built using JavaScript (ES2020+), HTML, and CSS. TypeScript is recommended but not required.

### Can I use TypeScript?

Yes. TypeScript is encouraged for better type safety and code quality. You must compile your TypeScript to JavaScript before submitting.

### Are there any restrictions on what I can build?

Yes. Please review the Rules document before starting. Extensions must not contain malicious code, track users without consent, or include prohibited content.

---

## Submission Questions

### How do I submit my extension?

Fork the repository, create your extension in `extensions/community/`, and open a pull request. Detailed instructions are available in the Contributing Guide.

### What files are required?

Every extension must include `manifest.json` and `icon.png`. Background scripts, content scripts, styles, and documentation are optional but recommended.

### How long does the review process take?

Review times vary but typically take 1 to 3 business days. Larger or more complex submissions may take longer.

### What happens after my extension is approved?

Once approved, your extension is merged into the main branch and automatically published. It will become available to all Solara users.

### Can I update my extension after it is published?

Yes. Open a new pull request with your changes and increment the version number in your manifest.

### What if my extension is rejected?

You will receive feedback explaining the reason. You can address the issues and resubmit.

### Can I submit an extension that is already available elsewhere?

Yes, as long as you own the rights to the code and it is licensed under MPL-2.0 or a compatible license.

---

## Technical Questions

### What is the manifest.json file?

The manifest is a JSON file that contains metadata about your extension, including its name, version, permissions, and entry points.

### What permissions can I request?

Common permissions include `storage`, `tabs`, `webRequest`, `cookies`, `bookmarks`, `history`, `downloads`, `notifications`, `alarms`, and `contextMenus`. A full list is available in the Rules document.

### Can I use external libraries?

Yes, but they must be bundled with your extension. Loading libraries from CDN is not allowed for security reasons.

### Can I make network requests?

Yes, but you must request the `webRequest` permission and respect the hostPermissions in your manifest.

### How do I store data?

Use the `storage` API to store and retrieve extension data. This is the recommended way to persist user settings and other data.

### Can I access the user's browsing history?

Yes, but you must request the `history` permission and only access history for legitimate purposes. Collecting history without user consent is prohibited.

### Can I modify web pages?

Yes, by using content scripts. Content scripts run in the context of web pages and can modify the DOM, inject CSS, and interact with the page.

### Can I run background tasks?

Yes, by using background scripts. Background scripts run independently of any web page and can perform periodic tasks, listen for events, and manage extension state.

---

## Security Questions

### What security measures are in place?

All extensions undergo automated validation and manual review. Suspicious patterns are flagged, and malicious code is rejected.

### Can I collect user data?

You may only collect user data with explicit, informed consent. You must clearly disclose what data you collect and how it is used.

### Can I track users across sites?

No. Tracking users across websites without consent is strictly prohibited.

### What happens if my extension is found to contain malicious code?

Your extension will be immediately removed from the repository, and your account may be permanently banned from the organization.

### Are there any restrictions on external resources?

Extensions must not load resources from untrusted sources. All external resources must be bundled with the extension.

---

## Community Questions

### Who maintains the extension repository?

The SolaraStudio organization maintains the repository. Community members are welcome to contribute.

### Can I become a maintainer?

Contributors who demonstrate a consistent history of high-quality submissions may be invited to become maintainers.

### Where can I get help?

You can open an issue in the repository or ask questions in the community forums.

### How can I report a problem with an extension?

Open an issue in the extension repository and provide details about the problem, including steps to reproduce and relevant logs.

### Can I request a new feature for the extension system?

Yes. Open an issue with the `enhancement` label and describe the feature you would like to see.

---

## Legal Questions

### What license must my extension use?

All extensions must be licensed under MPL-2.0 or a compatible license.

### Do I retain ownership of my extension?

Yes. You retain ownership of your code. By contributing, you grant SolaraStudio permission to distribute your extension.

### Can I charge for my extension?

No. All extensions in the official repository must be free and open source.

### What if my extension includes third-party code?

You must ensure that all third-party code is properly licensed and compatible with MPL-2.0.

---

## Troubleshooting

### My extension is not loading. What should I do?

Check the browser console for errors. Verify that your manifest is valid and that all required files are present.

### My content script is not running.

Ensure that your `matches` pattern is correct and that the content script is listed in your manifest.

### My background script is not running.

Check that your background script path is correct and that the script does not contain syntax errors.

### My extension is blocked by the browser.

Check that you have requested all necessary permissions and that your extension does not violate any security policies.

### My pull request failed validation.

Review the validation logs to identify the issue. Common issues include invalid JSON, duplicate IDs, and missing files.

---

## Additional Questions

### Can I submit an extension anonymously?

No. All submissions must include a valid GitHub username in the `author` field.

### Can I submit an extension on behalf of my organization?

Yes. Use the organization name as the author and ensure that the extension is properly licensed.

### Can I submit multiple extensions at once?

Yes, but each extension should be submitted in a separate pull request to simplify review.

### Can I submit a translation of an existing extension?

Yes, but you must credit the original author and ensure that the translation is accurate and complete.

### Where can I find examples of extensions?

Look at the `extensions/official/` directory for examples of well-structured extensions.

---

## Contact

If your question is not answered here, please open an issue or contact the maintainers directly.
