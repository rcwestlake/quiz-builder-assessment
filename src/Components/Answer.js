import React, { PropTypes } from 'react';

const Answer = ({ answer, k }) => {
  return (
    <div
      className="answer"
      key={k}
    >
      <input type="radio" />
      <span>{answer.title}</span>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.obj,
}

export default Answer
