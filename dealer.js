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