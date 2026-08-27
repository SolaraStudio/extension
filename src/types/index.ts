export interface ExtensionManifest {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  minAppVersion: string;
  permissions: Permission[];
  hostPermissions: string[];
  background?: {
    scripts: string[];
    persistent: boolean;
  };
  contentScripts?: {
    matches: string[];
    js: string[];
    css?: string[];
  }[];
  optionsUi?: {
    page: string;
    openInTab: boolean;
  };
  icons?: {
    [size: string]: string;
  };
}

export type Permission =
  | 'storage'
  | 'tabs'
  | 'webRequest'
  | 'cookies'
  | 'bookmarks'
  | 'history'
  | 'downloads'
  | 'notifications'
  | 'alarms'
  | 'contextMenus'
  | 'activeTab'
  | 'webNavigation'
  | 'browsingData'
  | 'management';

export interface Extension {
  id: string;
  manifest: ExtensionManifest;
  enabled: boolean;
  background?: BackgroundScript;
  contentScripts?: ContentScript[];
}

export interface BackgroundScript {
  scripts: string[];
  persistent: boolean;
}

export interface ContentScript {
  matches: string[];
  js: string[];
  css?: string[];
}

export interface ExtensionContext {
  id: string;
  manifest: ExtensionManifest;
  storage: StorageAPI;
  tabs: TabsAPI;
  webRequest: WebRequestAPI;
  browser: BrowserAPI;
}

export interface StorageAPI {
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
}

export interface TabsAPI {
  create(options: { url: string; active?: boolean }): Promise<Tab>;
  get(id: number): Promise<Tab>;
  update(id: number, options: { url?: string; active?: boolean }): Promise<Tab>;
  remove(id: number): Promise<void>;
  query(query: { active?: boolean; url?: string }): Promise<Tab[]>;
}

export interface Tab {
  id: number;
  url: string;
  title: string;
  active: boolean;
  loading: boolean;
}

export interface WebRequestAPI {
  onBeforeRequest: Event<BeforeRequestEvent>;
  onBeforeSendHeaders: Event<BeforeSendHeadersEvent>;
  onHeadersReceived: Event<HeadersReceivedEvent>;
}

export interface BeforeRequestEvent {
  addListener(
    callback: (details: { url: string; type: string }) => { cancel?: boolean; redirectUrl?: string },
    filter: { urls: string[] }
  ): void;
}

export interface BeforeSendHeadersEvent {
  addListener(
    callback: (details: { url: string; requestHeaders: Record<string, string> }) => { requestHeaders: Record<string, string> }
  ): void;
}

export interface HeadersReceivedEvent {
  addListener(
    callback: (details: { url: string; responseHeaders: Record<string, string> }) => { responseHeaders: Record<string, string> }
  ): void;
}

export interface BrowserAPI {
  openUrl(url: string): Promise<void>;
  reload(): Promise<void>;
  goBack(): Promise<void>;
  goForward(): Promise<void>;
  getCurrentUrl(): string;
}
