class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  toString() {
    return `${this.suit} ${this.rank}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ["♡", "♢", "♧", "♤"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this;
  }
  dealCard() {
    if (this.cards.length === 0) {
      return null;
    }

    const dealC = this.cards.pop();
    return dealC;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  addCard(card) {
    if (card) {
      this.hand.push(card);
    }
  }

  showHand() {
    return this.hand.map((card) => card.toString()).join(", ");
  }

//+
  renderHand() {
    const handElement = document.getElementById('player-hand');
    handElement.innerHTML = ''; // Очищаем текущую руку
    this.hand.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card-slot';
      cardElement.textContent = `${card.rank}${card.suit}`;
      handElement.appendChild(cardElement);
    });
  }
}

class Game {
  constructor(playerName) {
    this.deck = new Deck();
    this.player = new Player(playerName);
  }

  startGame() {
    // Перемешивание колоды
    this.deck.shuffle();
    // Количество карт на раздаче (плюс один из-за рендера)
    let counterCardsForHand = 2;
    for (let i = 0; i < counterCardsForHand; i++) {
      const card = this.deck.dealCard();
      if (card) {
        this.player.addCard(card);
      }
    }
    const card = this.deck.dealCard();
    this.player.addCard(card);
    this.player.renderHand();
    return card;
  }

  displayPlayerHand() {
    const handDisplay = document.querySelector(".hunds-game");
    handDisplay.innerHTML = this.player.showHand();
  }
}

const game = new Game("Slavichois");

// Вызываем startGame при загрузке страницы, чтобы раздать начальную руку
window.onload = () => {
  game.startGame();
};

// Обработчик события для кнопки раздачи карт
document.getElementById("deal-button").addEventListener("click", () => {
  game.startGame();
});

