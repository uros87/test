import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import chipImage from '../img/chip.png';

const AddCard = ({ history }) => {
  const [name, setName] = useState('');
  const [cardPartOne, setCardPartOne] = useState('');
  const [cardPartOneError, setCardPartOneError] = useState('');
  const [cardPartTwo, setCardPartTwo] = useState('');
  const [cardPartThree, setCardPartThree] = useState('');
  const [cardPartFour, setCardPartFour] = useState('');
  const [expiresOn, setExpiresOn] = useState('');
  const [expiresOnError, setExpiresOnError] = useState('');
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

  const validateCardNumber = (value) => {
    let regex = /^[4-6]\d{3}$/g;

    setCardPartOne(value);

    if (!regex.test(value)) {
      setCardPartOneError('Wrong card number');
    } else {
      setCardPartOneError('');
    }
  };

  const validateDate = (value) => {
    setExpiresOn(value);
    console.log(value);
    if (new Date(value) <= Date.now()) {
      setExpiresOnError('Wrong date');
    } else {
      setExpiresOnError('');
    }
  };

  const focusElement = (e) => {
    let nameOfClass = e.target.className.split(' ')[1];

    document.getElementsByClassName(nameOfClass)[1].focus();
  };

  return (
    <div className="main-container">
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
          <div
            className="card-number-one number-one"
            onClick={(e) => focusElement(e)}
          >
            {cardPartOne}
          </div>
          <div
            className="card-number-two number-two"
            onClick={(e) => focusElement(e)}
          >
            {cardPartTwo}
          </div>
          <div
            className="card-number-three number-three"
            onClick={(e) => focusElement(e)}
          >
            {cardPartThree}
          </div>
          <div
            className="card-number-four number-four"
            onClick={(e) => focusElement(e)}
          >
            {cardPartFour}
          </div>
        </div>
        <div className="card-name-expires">
          <div className="card-user name" onClick={(e) => focusElement(e)}>
            {name}
          </div>
          <div
            className="card-expiration expiration"
            onClick={(e) => focusElement(e)}
          >
            {expiresOn}
          </div>
        </div>
      </div>
      <div className="form-container">
        <form
          onSubmit={submitHandler}
          className="form"
          enctype="multipart/form-data"
        >
          <div className="input-container">
            <div className="">
              <label></label>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input name"
              />
            </div>
            <div className="card-whole-number">
              <div>
                <label></label>
                <input
                  type="text"
                  placeholder=""
                  name="cardPartOne"
                  value={cardPartOne}
                  maxLength="4"
                  onChange={(e) => validateCardNumber(e.target.value)}
                  className="input number-one"
                />
                <div>{cardPartOneError}</div>
              </div>
              <div>
                <label></label>
                <input
                  type="text"
                  placeholder=""
                  maxLength="4"
                  name="cardPartTwo"
                  value={cardPartTwo}
                  onChange={(e) => setCardPartTwo(e.target.value)}
                  className="input number-two"
                />
              </div>
              <div>
                <label></label>
                <input
                  type="text"
                  placeholder=""
                  maxLength="4"
                  name="cardPartThree"
                  value={cardPartThree}
                  onChange={(e) => setCardPartThree(e.target.value)}
                  className="input number-three"
                />
              </div>
              <div>
                <label></label>
                <input
                  type="text"
                  placeholder=""
                  maxLength="4"
                  name="cardPartFour"
                  value={cardPartFour}
                  onChange={(e) => setCardPartFour(e.target.value)}
                  className="input number-four"
                />
              </div>
            </div>
            <div>
              <div>
                <label></label>
                <input
                  type="date"
                  placeholder=""
                  name="expiresOn"
                  value={expiresOn}
                  onChange={(e) => validateDate(e.target.value)}
                  className="input expiration"
                />
              </div>
              <div>{expiresOnError}</div>
            </div>
            <button
              type="submit"
              disabled={cardPartOneError || expiresOnError ? true : false}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;
