// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
export const JokeSetup = (joke) => {
    return `
    <section class="theJokeSetup">
        <div class="setup">${joke.setup}</div>
    </section>
    `
}
export const JokePunchline = (joke) => {
    return `
    <section class="theJokePunchline">
        <div class="punchline">${joke.punchline}</div>
    </section>
    `
}