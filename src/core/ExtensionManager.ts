import {
  Extension,
  ExtensionManifest,
  ExtensionContext,
  StorageAPI,
  TabsAPI,
  WebRequestAPI,
  BrowserAPI
} from '../types';

export class ExtensionManager {
  private extensions: Map<string, Extension> = new Map();
  private contexts: Map<string, ExtensionContext> = new Map();
  private storage: StorageAPI;
  private tabs: TabsAPI;
  private webRequest: WebRequestAPI;
  private browser: BrowserAPI;

  constructor(
    storage: StorageAPI,
    tabs: TabsAPI,
    webRequest: WebRequestAPI,
    browser: BrowserAPI
  ) {
    this.storage = storage;
    this.tabs = tabs;
    this.webRequest = webRequest;
    this.browser = browser;
  }

  async loadExtension(manifest: ExtensionManifest, code: string): Promise<Extension> {
    if (this.extensions.has(manifest.id)) {
      throw new Error(`Extension ${manifest.id} is already loaded`);
    }

    const extension: Extension = {
      id: manifest.id,
      manifest,
      enabled: true,
    };

    const context: ExtensionContext = {
      id: manifest.id,
      manifest,
      storage: this.storage,
      tabs: this.tabs,
      webRequest: this.webRequest,
      browser: this.browser,
    };

    this.extensions.set(manifest.id, extension);
    this.contexts.set(manifest.id, context);

    if (manifest.background) {
      // Execute background script in sandbox
      await this.executeBackground(extension, context, code);
    }

    if (manifest.contentScripts) {
      this.registerContentScripts(extension);
    }

    return extension;
  }

  async unloadExtension(id: string): Promise<void> {
    const extension = this.extensions.get(id);
    if (!extension) {
      throw new Error(`Extension ${id} not found`);
    }

    this.extensions.delete(id);
    this.contexts.delete(id);
  }

  async enableExtension(id: string): Promise<void> {
    const extension = this.extensions.get(id);
    if (extension) {
      extension.enabled = true;
    }
  }

  async disableExtension(id: string): Promise<void> {
    const extension = this.extensions.get(id);
    if (extension) {
      extension.enabled = false;
    }
  }

  getExtension(id: string): Extension | undefined {
    return this.extensions.get(id);
  }

  getExtensions(): Extension[] {
    return Array.from(this.extensions.values());
  }

  getEnabledExtensions(): Extension[] {
    return Array.from(this.extensions.values()).filter((ext) => ext.enabled);
  }

  private async executeBackground(extension: Extension, context: ExtensionContext, code: string): Promise<void> {
    const sandbox = new Function(
      'context',
      'console',
      'setTimeout',
      'setInterval',
      'clearTimeout',
      'clearInterval',
      code
    );
    sandbox(
      context,
      console,
      setTimeout,
      setInterval,
      clearTimeout,
      clearInterval
    );
  }

  private registerContentScripts(extension: Extension): void {
    // This would be implemented in the bridge layer
    // to inject content scripts into webviews
  }
}
