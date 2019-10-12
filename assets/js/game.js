    function game(){

    
    var computerGuess;
    var userGuess;
    var winsDom = document.getElementById("wins")
    var lossesDom = document.getElementById("losses")
    var remainGuessesDom = document.getElementById("remainGuesses")
    var guessChoicesDom = document.getElementById("guessChoices")

    var computerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wins = 0;
    var losses = 0;
    var remainGuesses = 9;
    var guessChoices = []

    winsDom.textContent = "Wins: " + wins;
    lossesDom.textContent = "Losses: " + losses;
    remainGuessesDom.textContent = "Guesses Left: " + remainGuesses;
    guessChoicesDom.textContent = " You guesses so far: " + "";

    document.onkeyup = function (event) {
        var computerGuess = computerList[Math.floor(Math.random() * computerList.length)];

        userGuess = event.key.toLowerCase()
        console.log(userGuess, computerGuess)

        if (userGuess != computerGuess) {
            remainGuesses--;
            console.log("Your choice did not match ", remainGuesses)
            remainGuessesDom.textContent = "Guesses Left: " + remainGuesses;
            guessChoices[guessChoices.length] = userGuess;
            console.log(guessChoices)
            guessChoicesDom.textContent = " You guesses so far: " + guessChoices.join(", ") + "";
            if (remainGuesses === 0) {
                remainGuesses = 9;
                remainGuessesDom.textContent = "Guesses Left: " + remainGuesses;
                losses++;
                lossesDom.textContent = "Losses: " + losses;
                guessChoicesDom.textContent = " You guesses so far: " + "";
            }

        } else if (userGuess === computerGuess) {
            wins++
            console.log("You win ", wins)
            winsDom.textContent = "Wins: " + wins;
            remainGuesses = 9;
            remainGuessesDom.textContent = "Guesses Left: " + remainGuesses;
            lossesDom.textContent = "Losses: " + losses;
            guessChoices = [];
        }
    }
}