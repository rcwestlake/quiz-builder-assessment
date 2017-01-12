import React, { PropTypes } from 'react';

const Answer = ({ answer, k, id, handleClick }) => {
  return (
    <div
      className="answer"
      key={k}
    >
      <input
        type="radio"
        name={id}
        onClick={() => handleClick(id, answer.score)}
      />
      <span>{answer.title}</span>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.object,
  k: PropTypes.number,
  id: PropTypes.number,
  handleClick: PropTypes.func
}

export default Answer
