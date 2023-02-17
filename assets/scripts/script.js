let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

/**  Forloop to render HTML */

function renderChoices() {
    let html = "";
    for (let i = 0; i < choices.length; i++) {
        html += `<div class="flex-item hover" onclick="playerChoice('${choices[i]}')">
                        <img src="assets/images/${choices[i]}.png">
                        <h3>${choices[i]}</h3>
                </div>`;
        
    }
    document.getElementById("choices").innerHTML = html;
}
renderChoices(); 

/**  player and computer choice calc */

function playerChoice(val) {
    document.getElementById("equalResult").style.display = "none";
    document.getElementById("winResult").style.display = "none";
    document.getElementById("lossResult").style.display = "none";
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (val === computerChoice) {
        document.getElementById("equalResult").style.display = "block";
    }
    else if (val === "Rock" && computerChoice === "Scissors" || val === "Paper" && computerChoice === "Rock" || val === "Scissors" && computerChoice === "Paper") {
        document.getElementById("winResult").style.display = "block";
        playerScore++;
    }
    else {
        document.getElementById("lossResult").style.display = "block";
        computerScore++;
    }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    
}

/**  Score reset function for button */

function resetScore() {
    document.getElementById("equalResult").style.display = "none";
    document.getElementById("winResult").style.display = "none";
    document.getElementById("lossResult").style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

   



