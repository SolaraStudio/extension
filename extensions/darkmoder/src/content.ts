const darkStyles = `
  html {
    filter: invert(1) hue-rotate(180deg);
    background: #000;
  }
  img, video, iframe {
    filter: invert(1) hue-rotate(180deg);
  }
`;

function applyDarkMode(): void {
  const style = document.createElement('style');
  style.id = 'dark-reader-style';
  style.textContent = darkStyles;
  document.head.appendChild(style);
}

chrome.storage.local.get('darkMode', (result) => {
  if (result.darkMode !== false) {
    applyDarkMode();
  }
});
