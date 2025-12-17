const quoteContainer = document.getElementById('quote-container');
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
// To GetQuote
function newQuote() {
    const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quotes.author;
    quoteText.textContent = quotes.text;
    //quote length styking
    if (quotes.text.length > 120)
        quoteText.classList.add('long-quote');
    else
        quoteText.classList.remove('long-quote');
    quotes.textContent = quoteText;

}

// Get Quotes From Api
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert("Something Went Wrong!");
        console.log(error);
    }
}

//new-quote-button

newQuoteBtn.addEventListener('click', newQuote);
//Load
getQuotes();

