//script.js BlackJack, Überarbeitung:
//HTML Elemente:

const dealerContainer = document.getElementById("dealerside");
const playerContainer = document.getElementById("playerside");
const cardStack = document.getElementById("cards");
const gameMessage = document.getElementById("game-message");
const buttonStartGame = document.getElementById("buttonStartGame");
const buttonHit = document.getElementById("hit");
const buttonStand = document.getElementById("stand");
const totalPointsPlayer = document.getElementById("totalPointsPlayer");
const totalPointsDealer = document.getElementById("totalPointsDealer");
const labelPlayerBet = document.getElementById("playerBet");
const labelPlayerBudget = document.getElementById("playerBudget");

const pointBar = document.getElementById("pointBar");
const buttonDouble = document.getElementById("doubleBet")
//HTML Elemente verstecken:

buttonHit.disabled = true;
buttonStand.disabled = true;
buttonDouble .disabled = true;
buttonStartGame.disabled = true;

totalPointsPlayer.hidden = true;
totalPointsDealer.hidden = true;

//Listen
let cards = ['2 (♦)', '3 (♦)', '4 (♦)', '5 (♦)', '6 (♦)', '7 (♦)', '8 (♦)', '9 (♦)', '10 (♦)', 'J (♦)', 'Q (♦)', 'K (♦)', 'A (♦)', '2 (♥)', '3 (♥)', '4 (♥)', '5 (♥)', '6 (♥)', '7 (♥)', '8 (♥)', '9 (♥)', '10 (♥)', 'J (♥)', 'Q (♥)', 'K (♥)', 'A (♥)', '2 (♣)', '3 (♣)', '4 (♣)', '5 (♣)', '6 (♣)', '7 (♣)', '8 (♣)', '9 (♣)', '10 (♣)', 'J (♣)', 'Q (♣)', 'K (♣)', 'A (♣)', '2 (♠)', '3 (♠)', '4 (♠)', '5 (♠)', '6 (♠)', '7 (♠)', '8 (♠)', '9 (♠)', '10 (♠)', 'J (♠)', 'Q (♠)', 'K (♠)', 'A (♠)']
let listDealerCards = [];
let listPlayerCards = [];

//Anderes

let hiddenDealerCardValue = "?";
let cardFromDeck = 1;
let playerPoints = 0;
let dealerPoints = 0;
let playerBet = 0;
let playerBudget = 50;
let playerMovesCount = 0;


function startGame() {
  reset();

  cardStack.style.visibility = "visible";
  buttonStartGame.disabled = true;

  if (cardFromDeck >= 40 || cardFromDeck === 1) {
    shuffleCards(cards);
    cardFromDeck = 1;
    console.log(cards);
  }

  addCardDealer(cards[cardFromDeck], true);
  addCardPlayer(cards[cardFromDeck]);
  addCardDealer(cards[cardFromDeck]);
  addCardPlayer(cards[cardFromDeck]);

  buttonHit.disabled = false;
  buttonStand.disabled = false;

if(enoughMoney(playerBet))
{
  buttonDouble.disabled = false;
}

  calculatePoints();
}

function shuffleCards(cards) { //ChatGPT
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements
    }
}

function updateCardStack() {
  cardFromDeck++;
  cardStack.innerHTML = "K: " + (52 - (cardFromDeck - 1));
}

function reset() {

  playerMovesCount = 0;
  hiddenDealerCardValue = "?";
  gameMessage.innerHTML = "";
  listDealerCards = [];
  listPlayerCards = [];

  pointBar.style.visibility = "hidden"

  //ChatGPT
  const playerCards = playerContainer.querySelectorAll(".card");
  playerCards.forEach((card) => {
    playerContainer.removeChild(card);
  });
  //ChatGPT
  const dealerCards = dealerContainer.querySelectorAll(".card");
  dealerCards.forEach((card) => {
    dealerContainer.removeChild(card);
  });
}

function giveValue(cardText) {
  //CHAT GPT
  // Extract the rank from the cardText
  let rank = cardText.split(" ")[0];

  // Check if the rank is a number
  if (!isNaN(rank)) {
    return parseInt(rank);
  } else {
    // Check for face cards and Aces
    switch (rank) {
      case "J":
      case "Q":
      case "K":
        return 10;
      case "A":
        return 11;
      default:
        // Handle invalid cardText
        console.error("Invalid cardText:", cardText);
        return null;
    }
  }
}

function checkForWinner() {
  console.log("Dealer: " + dealerPoints + " in " + listDealerCards.length);
  console.log("Player: " + playerPoints + " in " + listPlayerCards.length);

  // Schaltet den Startbutton auf disable
  buttonStartGame.disabled = true;

  setPointBarVisible();

  if (dealerPoints > 21 && playerPoints <= 21) {
    gameMessage.innerHTML = "Der Spieler hat gewonnen! (1)";
    addWinIntoBudget(2);
  } // Dealer overshootet und Spieler nicht
  if (dealerPoints > 21 && playerPoints > 21) {
    gameMessage.innerHTML = "Der Spieler verliert seinen Einsatz! (2)";
    setPlayerBetToZero();
  } // Dealer und Spieler overshooten beide
  if (dealerPoints === playerPoints && playerPoints <= 21) {
    gameMessage.innerHTML = "Push! (3)";
    addWinIntoBudget(1);
  } // Push (Beide haben gleich viel und der Spieler hat nicht overshootet)
  if (dealerPoints < playerPoints && playerPoints <= 21) {
    gameMessage.innerHTML = "Der Spieler hat gewonnen! (4)";
    addWinIntoBudget(2);
  } // Der Spieler hat mehr Punkte als der Dealer aber weniger/gleich 21
  if (dealerPoints >= 17 && playerPoints < 17 && dealerPoints <= 21) {
    gameMessage.innerHTML = "Der Dealer hat gewonnen! (5)";
    setPlayerBetToZero();
  } //Der Dealer hat 17 oder mehr Punkte und der Spieler hat weniger als 17
  if (dealerPoints <= 21 && playerPoints > 21) {
    gameMessage.innerHTML = "Der Dealer gewinnt! (6)";
    setPlayerBetToZero();
  } // Spieler overshootet und Dealer nicht
  if (dealerPoints > playerPoints && dealerPoints <= 21) {
    gameMessage.innerHTML = "Der Dealer hat gewonnen! (7)";
    setPlayerBetToZero();
  } // Der Dealer hat mehr Punkte als der Spieler aber weniger/gleich 21

  //BlackJack überprüfen:

  if (dealerBlackJack()) {
    totalPointsDealer.innerHTML = "Black Jack! (" + dealerPoints + ")";
  }
  if (playerBlackJack()) {
    totalPointsPlayer.innerHTML = "Black Jack! (" + playerPoints + ")";
  }

  if (playerBlackJack() || dealerBlackJack()) {
    if (playerBlackJack() && dealerBlackJack()) {
      gameMessage.innerHTML = "Push! (3)"; //Beide haben ein Blackjack!
    }

    if (playerBlackJack() && !dealerBlackJack()) {
      gameMessage.innerHTML = "Der Spieler gewinnt (Black Jack)! (8)"; //Nur Spieler hat Blackjack
      addWinIntoBudget(2.5);
    }

    if (!playerBlackJack() && dealerBlackJack()) {
      gameMessage.innerHTML = "Der Dealer gewinnt (Black Jack)! (9)"; //Nur Dealer hat Blackjack
      addWinIntoBudget();
    }
  }
}

function playerBlackJack() {
  return playerPoints === 21 && listPlayerCards.length === 2;
}

function dealerBlackJack() {
  return dealerPoints === 21 && listDealerCards.length === 2;
}


function addInputPoints(moneyValue){

  if(enoughMoney(moneyValue))
  {
    playerBudget -= moneyValue;
    playerBet += moneyValue;
  }

  if(isBetHigherThenZero()){
    buttonStartGame.disabled = false;
  }
  loadBudget();
}

function removeInputPoints(moneyValue){

  if(enoughBet(moneyValue))
  {
    playerBudget += moneyValue;
    playerBet -= moneyValue;
  }
  if(!isBetHigherThenZero()){
    buttonStartGame.disabled = true;
  }
  loadBudget();

}

function addWinIntoBudget(multiplier){
  let winValue = playerBet * multiplier;
  playerBudget += winValue;
  setPlayerBetToZero();
  loadBudget();
}

function setPlayerBetToZero()
{
  playerBet = 0;
  loadBudget();

}

function setPointBarVisible()
{
  pointBar.style.visibility = "visible";
}

function loadBudget(){
  labelPlayerBudget.textContent = "Budget: " + playerBudget;
  labelPlayerBet.innerHTML = "Bet: " + playerBet;
  }