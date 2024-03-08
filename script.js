const dealerContainer = document.querySelector('.dealer');
const playerContainer = document.querySelector('.player');

function addCardDealer(text) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = text;
    dealerContainer.appendChild(card);
}

function addCardPlayer(text) {
    const card = document.createElement("div");
    card.classList.add('card');
    card.textContent = text;
    playerContainer.appendChild(card);
}

function startGame() {
    
}