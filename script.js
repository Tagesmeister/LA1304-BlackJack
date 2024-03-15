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

//HTML Elemente verstecken:

buttonHit.disabled = true;
buttonStand.disabled = true;
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

function addCardDealer(text, visibility) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (visibility) {
    card.textContent = text;
    card.style.backgroundColor = "white";
  } else {
    card.textContent = hiddenDealerCardValue;
    card.id = "hiddenDealerCard";
    card.style.backgroundColor = "red";
    hiddenDealerCardValue = text;
  }
  dealerContainer.appendChild(card);
  listDealerCards.push(giveValue(text));
  updateCardStack();
}

function addCardPlayer(text) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = text;
  card.style.backgroundColor = "white";
  playerContainer.appendChild(card);
  listPlayerCards.push(giveValue(text));
  updateCardStack();
}

function updateCardStack() {
  cardFromDeck++;
  cardStack.innerHTML = "K: " + (52 - (cardFromDeck - 1));
}

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

  calculatePoints();
}

function shuffleCards(cards) { //ChatGPT
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements
    }
}

function reset() {
  hiddenDealerCardValue = "?";
  gameMessage.innerHTML = "";
  listDealerCards = [];
  listPlayerCards = [];

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

function calculatePoints() {
  //Player:

  playerPoints = 0;

  for (const card of listPlayerCards) {
    playerPoints += card;
  }
  if (playerPoints > 21 && listPlayerCards.includes(11)) {
    listPlayerCards[listPlayerCards.indexOf(11)] = 1;
    calculatePoints();
  }
  if (playerPoints > 21) {
    totalPointsPlayer.innerHTML = "Overshoot! (" + playerPoints + ")";
    autoStand();
  }
  if (playerPoints === 21) {
    autoStand();
  }

  //Dealer:

  dealerPoints = 0;

  if (document.getElementById("hiddenDealerCard").innerHTML === "?") {
    dealerPoints = listDealerCards[0];
    console.log(listDealerCards[0]);
  } else {
    for (const card of listDealerCards) {
      dealerPoints += card;
    }
    if (dealerPoints < 17) {
      addCardDealer(cards[cardFromDeck], true);
      calculatePoints();
    }
    if (dealerPoints > 21 && listDealerCards.includes(11)) {
      listDealerCards[listDealerCards.indexOf(11)] = 1;
      calculatePoints();
    }
    if (dealerPoints > 21) {
      totalPointsDealer.innerHTML = "Overshoot! (" + dealerPoints + ")";
    }
  }

  totalPointsPlayer.hidden = false;
  totalPointsDealer.hidden = false;
  if (playerPoints <= 21 && !playerBlackJack())
    totalPointsPlayer.innerHTML = "Punkte: " + playerPoints;
  if (dealerPoints <= 21 && !dealerBlackJack())
    totalPointsDealer.innerHTML = "Punkte: " + dealerPoints;
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

function playerHit() {
  addCardPlayer(cards[cardFromDeck]);
  calculatePoints();
}

function playerStand() {
  stand();
  calculatePoints();
  checkForWinner();
}

function autoStand() {
  stand();
  checkForWinner();
}

function stand() {
  buttonHit.disabled = true;
  buttonStand.disabled = true;
  console.log("Dealer Card revealed!");
  document.getElementById("hiddenDealerCard").innerHTML = hiddenDealerCardValue;
  document.getElementById("hiddenDealerCard").style.backgroundColor = "white";
}

function checkForWinner() {
  console.log("Dealer: " + dealerPoints + " in " + listDealerCards.length);
  console.log("Player: " + playerPoints + " in " + listPlayerCards.length);
  if (dealerPoints > 21 && playerPoints <= 21) {
    gameMessage.innerHTML = "Der Spieler hat gewonnen! (1)";
  } // Dealer overshootet und Spieler nicht
  if (dealerPoints > 21 && playerPoints > 21) {
    gameMessage.innerHTML = "Der Spieler verliert seinen Einsatz! (2)";
  } // Dealer und Spieler overshooten beide
  if (dealerPoints === playerPoints && playerPoints <= 21) {
    gameMessage.innerHTML = "Push! (3)";
  } // Push (Beide haben gleich viel und der Spieler hat nicht overshootet)
  if (dealerPoints < playerPoints && playerPoints <= 21) {
    gameMessage.innerHTML = "Der Spieler hat gewonnen! (4)";
  } // Der Spieler hat mehr Punkte als der Dealer aber weniger/gleich 21
  if (dealerPoints >= 17 && playerPoints < 17 && dealerPoints <= 21) {
    gameMessage.innerHTML = "Der Dealer hat gewonnen! (5)";
  } //Der Dealer hat 17 oder mehr Punkte und der Spieler hat weniger als 17
  if (dealerPoints <= 21 && playerPoints > 21) {
    gameMessage.innerHTML = "Der Dealer gewinnt! (6)";
  } // Spieler overshootet und Dealer nicht
  if (dealerPoints > playerPoints && dealerPoints <= 21) {
    gameMessage.innerHTML = "Der Dealer hat gewonnen! (7)";
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
    }

    if (!playerBlackJack() && dealerBlackJack()) {
      gameMessage.innerHTML = "Der Dealer gewinnt (Black Jack)! (9)"; //Nur Dealer hat Blackjack
    }
  }

  buttonStartGame.disabled = false;
}

function playerBlackJack() {
  return playerPoints === 21 && listPlayerCards.length === 2;
}

function dealerBlackJack() {
  return dealerPoints === 21 && listDealerCards.length === 2;
}
