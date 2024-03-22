function addCardPlayer(text) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = text;
    card.style.backgroundColor = "white";
    playerContainer.appendChild(card);
    listPlayerCards.push(giveValue(text));
    updateCardStack();
  }

  function playerHit() {

    buttonDouble.disabled = true;
  
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
    buttonDouble.disabled = true;
  
    console.log("Dealer Card revealed!");
    document.getElementById("hiddenDealerCard").innerHTML = hiddenDealerCardValue;
    document.getElementById("hiddenDealerCard").style.backgroundColor = "white";
  }

  function doubleBet()
{
    addInputPoints(playerBet)
    addCardPlayer(cards[cardFromDeck])

    // Doublen kann man nur einmal machen.
    playerStand();
}