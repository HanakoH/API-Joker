import { getJoke } from './JokeProvider.js';
import { JokeSetup, JokePunchline } from './Joke.js';

const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".request-punchline-btn");

let theJoke = {};

jokeBtn.addEventListener("click", () => {
  getJoke()
  .then(jokeData => {
    theJoke = jokeData;
    const fullJokeSetup = JokeSetup(theJoke)
    const jokeSetupElement = document.querySelector(".joke-setup");
    jokeSetupElement.innerHTML = ""
    jokeSetupElement.innerHTML += fullJokeSetup
  })
});



punchlineBtn.addEventListener("click", () => {
    const fullJokePunchline = JokePunchline(theJoke)
    const jokePunchlineElement = document.querySelector(".joke-punchline");
    jokePunchlineElement.innerHTML = ""
    jokePunchlineElement.innerHTML += fullJokePunchline
});

