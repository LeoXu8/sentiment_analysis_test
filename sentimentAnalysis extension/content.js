chrome.runtime.onMessage.addListener((request, sender) => {
    return new Promise((resolve) => {
        if (request.action === "analyzeSentiment") {
            const text = document.body.innerText;
            resolve({text: text});
        }
    });
});
