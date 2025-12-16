const jokeContainer = document.getElementById('joke');
const punchContainer = document.getElementById('punch');
const newjokeBtn = document.getElementById('button');

let joke = [];
function newJoke() {
    jokeContainer.textContent = joke.setup;
    punchContainer.textContent = joke.punchline;

}

async function getJokes() {
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
    try {
        const response = await fetch(apiUrl);
        joke = await response.json();
        newJoke()
    } catch (error) {
        alert("Something Went Wrong!");
        console.log(error);
    }
}
getJokes()
newjokeBtn.addEventListener('click', getJokes);