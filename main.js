function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice();
  console.log("computer choice:", botChoice);
  results = decideWinner(humanChoice, botChoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
}

const randToRpsInt = Math.floor(Math.random() * 3);
console.log(randToRpsInt);

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { Scissors: 1, rock: 0.5, Paper: 0 },
    Paper: { rock: 1, Paper: 0.5, Scissors: 0 },
    Scissors: { Paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "you lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "you tied", color: "yellow" };
  } else {
    return { message: "you won", color: "green" };
  }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' >";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
}
