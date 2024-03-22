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

  function isBetHigherThenZero()
{
  return playerBet > 0
}

function enoughBet(moneyValue)
{
  return playerBet >= moneyValue;
}


function enoughMoney(moneyValue)
{
  return playerBudget >= moneyValue;
}
