import React from 'react';
import './SingleCard.css';

export const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="Card front" />
        <img
          onClick={handleClick}
          className="back"
          src="/img/cover.png"
          alt="Card Back"
        />
      </div>
    </div>
  );
};
