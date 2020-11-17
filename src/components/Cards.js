import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    if (cards) {
      setCards(cards);
    }

    console.log(cards);
  }, []);
  return (
    <div>
      <Link to="/cards/add" className="btn btn-light">
        Add Card
      </Link>
      <div>
        {cards.map((card) => (
          <Link
            key={card.id}
            to={{
              pathname: `/cards/${card.id}/edit`,
              state: { card },
            }}
          >
            {card.name}
            {card.cardPartOne}
            {card.cardPartTwo}
            {card.cardPartThree}
            {card.cardPartFour}
            {card.expiresOn}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
