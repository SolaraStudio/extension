interface KotlinBridgeAPI {
  sendMessage(extensionId: string, message: any): void;
  onMessage(callback: (message: any) => void): void;
  log(message: string): void;
}

export class KotlinBridge {
  private static instance: KotlinBridge;
  private listeners: ((message: any) => void)[] = [];

  static getInstance(): KotlinBridge {
    if (!KotlinBridge.instance) {
      KotlinBridge.instance = new KotlinBridge();
    }
    return KotlinBridge.instance;
  }

  sendToKotlin(extensionId: string, message: any): void {
    if (window['SolaraBridge']) {
      (window as any).SolaraBridge.sendMessage(extensionId, message);
    }
  }

  sendToExtension(extensionId: string, message: any): void {
    const event = new CustomEvent('solara:message', {
      detail: { extensionId, message }
    });
    window.dispatchEvent(event);
  }

  log(message: string): void {
    if (window['SolaraBridge']) {
      (window as any).SolaraBridge.log(message);
    }
  }

  onMessage(callback: (message: any) => void): void {
    this.listeners.push(callback);
    window.addEventListener('solara:message', (event) => {
      const detail = (event as CustomEvent).detail;
      callback(detail);
    });
  }
}
