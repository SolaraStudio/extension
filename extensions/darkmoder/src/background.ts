let darkModeEnabled = true;

context.storage.get('darkMode').then((value) => {
  darkModeEnabled = value !== undefined ? value : true;
});

// Listen for toggle messages
window.addEventListener('solara:message', (event) => {
  const { message } = (event as CustomEvent).detail;
  if (message.type === 'toggleDarkMode') {
    darkModeEnabled = !darkModeEnabled;
    context.storage.set('darkModer', darkModeEnabled);
  }
});

console.log('[Darkmoder] Loaded');
