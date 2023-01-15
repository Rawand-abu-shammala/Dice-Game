let currentPlayer = 1;
let player1TotalScore = 0;
let player2TotalScore = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let finalScore;

document.getElementById('player1-roll-dice').addEventListener('click', function() {
  let roll = getRandomNumber();
  if (roll === 1) {
    player1CurrentScore = 0;
    document.getElementById('player1-current-score').innerHTML = player1CurrentScore;
    currentPlayer = 2;
  } else {
    player1CurrentScore += roll;
    document.getElementById('player1-current-score').innerHTML = player1CurrentScore;
  }
});

document.getElementById('player1-hold').addEventListener('click', function() {
    player1TotalScore += player1CurrentScore;
    player1CurrentScore = 0;
    document.getElementById('player1-total-score').innerHTML = player1TotalScore;
    document.getElementById('player1-current-score').innerHTML = player1CurrentScore;
    checkForWinner();
    currentPlayer = 2;
});

document.getElementById('player2-roll-dice').addEventListener('click', function() {
    let roll = getRandomNumber();
    if (roll === 1) {
        player2CurrentScore = 0;
        document.getElementById('player2-current-score').innerHTML = player2CurrentScore;
        currentPlayer = 1;
    } else {
        player2CurrentScore += roll;
        document.getElementById('player2-current-score').innerHTML = player2CurrentScore;
    }
});

document.getElementById('player2-hold').addEventListener('click', function() {
    player2TotalScore += player2CurrentScore;
    player2CurrentScore = 0;
    document.getElementById('player2-total-score').innerHTML = player2TotalScore;
    document.getElementById('player2-current-score').innerHTML = player2CurrentScore;
    checkForWinner();
    currentPlayer = 1;
});

document.getElementById('new-game').addEventListener('click', function() {
    player1TotalScore = 0;
    player2TotalScore = 0;
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    document.getElementById('player1-total-score').innerHTML = player1TotalScore;
    document.getElementById('player2-total-score').innerHTML = player2TotalScore;
    document.getElementById('player1-current-score').innerHTML = player1CurrentScore;
    document.getElementById('player2-current-score').innerHTML = player2CurrentScore;
    currentPlayer = 1;
});

// function checkForWinner() {
//     if (player1TotalScore >= finalScore) {
//         alert("Player 1 wins!");
//     } else if (player2TotalScore >= finalScore) {
//         alert("Player 2 wins!");
//     }
// }

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get the input field and its value
let finalScoreInput = document.getElementById('final-score');
let finalScoree = parseInt(finalScoreInput.value);

// Update the final score variable when the input value changes
finalScoreInput.addEventListener('change', function(){
    finalScoree = parseInt(finalScoreInput.value);
});

function checkForWinner() {
    if (player1TotalScore >= finalScoree) {
        alert("Player 1 wins!");
    } else if (player2TotalScore >= finalScoree) {
        alert("Player 2 wins!");
    }
}

if (player1TotalScore >= finalScore) {
    document.getElementById('winner-text').className += " winner-text";
}
