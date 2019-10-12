    function game(){

    
    var computerGuess;
    var userGuess;
    var winsDom = document.getElementById("wins")
    var lossesDom = document.getElementById("losses")
    var leftDom = document.getElementById("left")
    var guessChoicesDom = document.getElementById("guessChoices")

    var computerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wins = 0;
    var losses = 0;
    var left = 9;
    var guessChoices = []

    winsDom.textContent = "Wins: " + wins;
    lossesDom.textContent = "Losses: " + losses;
    leftDom.textContent = "Guesses Left: " + left;
    guessChoicesDom.textContent = " You guesses so far: " + "";

    document.onkeyup = function (event) {
        var computerGuess = computerList[Math.floor(Math.random() * computerList.length)];

        userGuess = event.key.toLowerCase()
        console.log(userGuess, computerGuess)

        if (userGuess != computerGuess) {
            left--;
            console.log("Your choice did not match ", left)
            leftDom.textContent = "Guesses Left: " + left;
            guessChoices[guessChoices.length] = userGuess;
            console.log(guessChoices)
            guessChoicesDom.textContent = " You guesses so far: " + guessChoices.join(", ") + "";
            if (left === 0) {
                left = 9;
                leftDom.textContent = "Guesses Left: " + left;
                losses++;
                lossesDom.textContent = "Losses: " + losses;
                guessChoicesDom.textContent = " You guesses so far: " + "";
            }

        } else if (userGuess === computerGuess) {
            wins++
            console.log("You win ", wins)
            winsDom.textContent = "Wins: " + wins;
            left = 9;
            leftDom.textContent = "Guesses Left: " + left;
            lossesDom.textContent = "Losses: " + losses;
            guessChoices = [];
        }
    }
}