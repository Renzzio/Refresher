function playGame(playerMove) {
    const computerMove = Math.random();

    // Set both images to rock and add shake animation
    const playerMoveDisplay = document.getElementById("player-move-display");
    const computerMoveDisplay = document.getElementById("computer-move-display");

    playerMoveDisplay.src = "icons/left-rock.png";
    computerMoveDisplay.src = "icons/right-rock.png";
    playerMoveDisplay.classList.add("shake");
    computerMoveDisplay.classList.add("shake");

    const resultDisplay = document.getElementById("result-display");


    // Hide result during animation
    document.getElementById("result-display").textContent = "";

    setTimeout(() => {
        // Remove shake animation
        playerMoveDisplay.classList.remove("shake");
        computerMoveDisplay.classList.remove("shake");

        // Show actual moves and result
        displayMove(playerMove, computerMove);
        resultDisplay.classList.remove("win", "lose", "tie");
        
        if (playerMove === "rock") {
            if (computerMove < 0.33) {
                displayResult('IT IS A TIE');
                resultDisplay.classList.add("tie");
                score.tie++;
            } else if (computerMove < 0.66) {
                displayResult('COMPUTER WINS');
                resultDisplay.classList.add("lose");
                score.computer++;
            } else {
                displayResult('YOU WIN');
                resultDisplay.classList.add("win");
                score.player++;
            }
        } else if (playerMove === "paper") {
            if (computerMove < 0.33) {
                displayResult('YOU WIN');
                resultDisplay.classList.add("win");
                score.player++;
            } else if (computerMove < 0.66) {
                displayResult('IT IS A TIE');
                resultDisplay.classList.add("tie");
                score.tie++;
            } else {
                displayResult('COMPUTER WINS');
                resultDisplay.classList.add("lose");
                score.computer++;
            }
        } else if (playerMove === "scissors") {
            if (computerMove < 0.33) {
                displayResult('COMPUTER WINS');
                resultDisplay.classList.add("lose");
                score.computer++;
            } else if (computerMove < 0.66) {
                displayResult('YOU WIN');
                resultDisplay.classList.add("win");
                score.player++;
            } else {
                displayResult('IT IS A TIE');
                resultDisplay.classList.add("tie");
                score.tie++;
            }
        }
        updateScore();
    }, 600); // Match the animation duration
}


function displayResult (result) {
    const resultDisplay = document.getElementById("result-display");
    resultDisplay.textContent = result;
}

function displayMove(playerMove, computerMove) {
    const playerMoveDisplay = document.getElementById("player-move-display");
    const computerMoveDisplay = document.getElementById("computer-move-display");

   if (playerMove === "rock") {
        playerMoveDisplay.src = "icons/left-rock.png";
    } else if (playerMove === "paper") {
        playerMoveDisplay.src = "icons/left-paper.png";
    } else if (playerMove === "scissors") {
        playerMoveDisplay.src = "icons/left-scissors.png";
    }

    if (computerMove < 0.33) {
        computerMoveDisplay.src = "icons/right-rock.png";
    } else if (computerMove < 0.66) {
        computerMoveDisplay.src = "icons/right-paper.png";
    } else {
        computerMoveDisplay.src = "icons/right-scissors.png";
    }
}

const score = {
    player: 0,
    computer: 0,
    tie: 0
}

function updateScore() {
    document.getElementById("p-score").textContent = score.player;
    document.getElementById("c-score").textContent = score.computer;
    document.getElementById("t-score").textContent = score.tie;
}

function resetScore() {
    score.player = 0;
    score.computer = 0;
    score.tie = 0;
    document.getElementById("result-display").textContent = "";
    updateScore();
}