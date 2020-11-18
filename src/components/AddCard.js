import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import chipImage from '../img/chip.png';

const AddCard = ({ history }) => {
  const [name, setName] = useState('');
  const [cardPartOne, setCardPartOne] = useState('');
  const [cardPartTwo, setCardPartTwo] = useState('');
  const [cardPartThree, setCardPartThree] = useState('');
  const [cardPartFour, setCardPartFour] = useState('');
  const [expiresOn, setExpiresOn] = useState('');
  const [cardType, setCardType] = useState('visa');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    if (cards) {
      setCards(cards);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const card = {
      name,
      cardPartOne,
      cardPartTwo,
      cardPartThree,
      cardPartFour,
      expiresOn,
      cardType,
      id: uuidv4(),
    };

    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
    history.push('/cards');
  };

  const typesOfCards = ['visa', 'master', 'discover'];

  const changeTypeOfCard = () => {
    setCardType(typesOfCards[whichCard()]);
  };

  const whichCard = () => {
    let num = typesOfCards.indexOf(cardType);

    if (typesOfCards.indexOf(cardType) <= 1) {
      num++;
    } else if (typesOfCards.indexOf(cardType) === 2) {
      num = 0;
    }

    return num;
  };

  return (
    <div>
      <div className="card-container">
        <div className="card-type">
          <div>
            <button onClick={changeTypeOfCard}>{cardType}</button>
          </div>
        </div>
        <div className="card-chip">
          <img src={chipImage} alt="image" className="chip-image" />
        </div>
        <div className="card-number">
          <div className="card-number-one">{cardPartOne}</div>
          <div className="card-number-one">{cardPartTwo}</div>
          <div className="card-number-one">{cardPartThree}</div>
          <div className="card-number-one">{cardPartFour}</div>
        </div>
        <div className="card-name-expires">
          <div className="card-user">{name}</div>
          <div className="card-expiration">{expiresOn}</div>
        </div>
      </div>
      <div className="form-container">
        <form
          onSubmit={submitHandler}
          className="form"
          enctype="multipart/form-data"
        >
          <div>
            <label></label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>
          <div className="">
            <div>
              <label></label>
              <input
                type="number"
                placeholder=""
                name="cardPartOne"
                value={cardPartOne}
                onChange={(e) => setCardPartOne(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label></label>
              <input
                type="number"
                placeholder=""
                name="cardPartTwo"
                value={cardPartTwo}
                onChange={(e) => setCardPartTwo(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label></label>
              <input
                type="number"
                placeholder=""
                name="cardPartThree"
                value={cardPartThree}
                onChange={(e) => setCardPartThree(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label></label>
              <input
                type="number"
                placeholder=""
                name="cardPartFour"
                value={cardPartFour}
                onChange={(e) => setCardPartFour(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label></label>
              <input
                type="date"
                placeholder=""
                name="expiresOn"
                value={expiresOn}
                onChange={(e) => setExpiresOn(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
