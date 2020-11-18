import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chipImage from '../img/chip.png';
import plusImage from '../img/plus.png';

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
        <div className="add-card-container">
          <img src={plusImage} alt="image" className="plus-image" />
        </div>
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
            <div className="card-container">
              <div className="card-type">
                <div>
                  <button>{card.cardType}</button>
                </div>
              </div>
              <div className="card-chip">
                <img src={chipImage} alt="image" className="chip-image" />
              </div>
              <div className="card-number">
                <div className="card-number-one">{card.cardPartOne}</div>
                <div className="card-number-one">{card.cardPartTwo}</div>
                <div className="card-number-one">{card.cardPartThree}</div>
                <div className="card-number-one">{card.cardPartFour}</div>
              </div>
              <div className="card-name-expires">
                <div className="card-user">{card.name}</div>
                <div className="card-expiration">{card.expiresOn}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
