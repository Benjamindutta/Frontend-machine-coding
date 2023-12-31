const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById('quoteDisplay');


function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json)
        .then(data => data.content)
}

function renderNewQuote() {
    const quote = getRandomQuote();
    quoteDisplayElement.innerText = quote;
}