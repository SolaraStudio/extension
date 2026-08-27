const filters: string[] = [
  'doubleclick.net',
  'googleadservices.com',
  'googlesyndication.com',
  'facebook.com/tr',
  'amazon-adsystem.com',
  'adnxs.com',
];

function shouldBlock(url: string): boolean {
  return filters.some(f => url.toLowerCase().includes(f));
}

// Register web request listener
context.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (shouldBlock(details.url)) {
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ['<all_urls>'] }
);

console.log('[AdBlocker] Loaded successfully');
