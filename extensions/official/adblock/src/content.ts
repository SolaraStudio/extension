const adSelectors = [
  '.ad', '.ads', '.advertisement',
  '.ad-container', '.ad-wrapper',
  '[class*="ad-"]', '[id*="ad-"]',
  '.google-ads', '.banner-ad'
];

function removeAds(): void {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', removeAds);
} else {
  removeAds();
}

const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });
