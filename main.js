var reset = prompt("Would you like to play agian?");
function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log("computerChoice", botChoice);

  results = decideWinner(humanChoice, botChoice);
  console.log(results);

  message = finalMessage(results);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
  const randToRpsInt = Math.floor(Math.random() * 3);
  return randToRpsInt;
}
console.log(randToRpsInt);

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  switch (true) {
    case yourScore > computerScore:
      return { message: "You won!", color: "green" };
    case computerScore > yourScore:
      return { message: "You lost!", color: "red" };
    default:
      return { message: "You tied!", color: "yellow" };
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
  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    "'min-width:280px width=400px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); '>";
  messageDiv.innerHTML =
    "<h1 style= 'color:" +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "'min-width:280px width=400px style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1); '>";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
}
