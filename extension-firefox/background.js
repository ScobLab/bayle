// Chrome MV3 : service worker
// Firefox MV2 : background script
// Aucune logique complexe ici — tout est dans popup.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Bayle installé');
});
