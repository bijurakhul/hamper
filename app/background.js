// Listener - When extension is installed
chrome.runtime.onInstalled.addListener(function() {
});

// Listener - Redirect Google to DuckDuckGo
let filterURLs = {
  urls: [
    "https://www.google.com/*"
  ]
};
chrome.webRequest.onBeforeRequest.addListener((details) => {
  return { redirectUrl: "https://www.duckduckgo.com" };
}, filterURLs, ["blocking"]);
