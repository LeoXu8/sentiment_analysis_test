document.getElementById('analyzeButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: analyzeText
        }, (results) => {
            const text = results[0].result;
            const words = text.split(' ');
            let score = 0;
            words.forEach(word => {
                if (word.toLowerCase() === 'happy' || word.toLowerCase() === 'good' || word.toLowerCase() === 'awesome') {
                    score++;
                } else if (word.toLowerCase() === 'sad' || word.toLowerCase() === 'bad' || word.toLowerCase() === 'terrible') {
                    score--;
                }
            });
            document.getElementById('result').innerText = `Sentiment Score: ${score}`;
        });
    });
});

function analyzeText() {
    return document.body.innerText;
}
