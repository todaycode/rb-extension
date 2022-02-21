chrome.runtime.onInstalled.addListener(() => {

});
let visitedURL = [];

const filter = {
    url: [
        {urlMatches: ".*(linkedin|youtube|udemy).*"},
    ],
};

chrome.webNavigation.onCompleted.addListener((details) => {                        //on document ready event
    
    chrome.scripting.executeScript(
    {
        target: {tabId: details.tabId},
        files:['js/removeImg.js']
    },
    (injectionResults) => {
        
    }
);
}, filter);
