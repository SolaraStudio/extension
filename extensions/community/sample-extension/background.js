// Sample Extension - Background Script
console.log('[Sample Extension] Background script loaded');

// Listen for messages from content scripts or the app
window.addEventListener('solara:message', (event) => {
  const { extensionId, message } = event.detail;
  if (extensionId === 'sample-extension') {
    console.log('Received message:', message);
  }
});
