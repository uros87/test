import React, { useState, useEffect } from 'react';

const EditCard = ({ location, history }) => {
  const [name, setName] = useState('');
  const [cardPartOne, setCardPartOne] = useState('');
  const [cardPartTwo, setCardPartTwo] = useState('');
  const [cardPartThree, setCardPartThree] = useState('');
  const [cardPartFour, setCardPartFour] = useState('');
  const [expiresOn, setExpiresOn] = useState('');
  const [id, setId] = useState('');
  const [cards, setCards] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const card = {
      name,
      cardPartOne,
      cardPartTwo,
      cardPartThree,
      cardPartFour,
      expiresOn,
      id,
    };

    const newArr = cards.filter((el) => {
      return el.id !== id;
    });

    newArr.push(card);

    localStorage.setItem('cards', JSON.stringify(newArr));

    history.push('/cards');
  };

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cards'));
    if (cards) {
      setCards(cards);
    }

    setName(location.state.card.name);
    setCardPartOne(location.state.card.cardPartOne);
    setCardPartTwo(location.state.card.cardPartTwo);
    setCardPartThree(location.state.card.cardPartThree);
    setCardPartFour(location.state.card.cardPartFour);
    setExpiresOn(location.state.card.expiresOn);
    setId(location.state.card.id);
  }, []);

  return (
    <div>
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
        <div className="card-number">
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
  );
};

export default EditCard;
