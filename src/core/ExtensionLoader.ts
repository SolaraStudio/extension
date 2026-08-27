import { ExtensionManifest } from '../types';

export class ExtensionLoader {
  async loadManifest(manifestPath: string): Promise<ExtensionManifest> {
    const response = await fetch(manifestPath);
    const manifest = await response.json();
    return this.validateManifest(manifest);
  }

  async loadCode(scriptPath: string): Promise<string> {
    const response = await fetch(scriptPath);
    return response.text();
  }

  private validateManifest(manifest: any): ExtensionManifest {
    // Validate required fields
    if (!manifest.id) throw new Error('Extension manifest missing id');
    if (!manifest.name) throw new Error('Extension manifest missing name');
    if (!manifest.version) throw new Error('Extension manifest missing version');
    if (!manifest.author) throw new Error('Extension manifest missing author');
    if (!manifest.description) throw new Error('Extension manifest missing description');
    if (!manifest.minAppVersion) throw new Error('Extension manifest missing minAppVersion');

    return manifest as ExtensionManifest;
  }
}
