import React, { PropTypes } from 'react'
import Answer from './Answer.js'

const Question = ({ k, title, id, answers, handleClick }) => {
  const answer = answers.map((answer, index) => {
    return <Answer
            answer={answer}
            k={index}
            id={id}
            handleClick={handleClick}
          />
  })
  return (
    <div
      className="question"
    >
      <h4 key={k}>{title}</h4>
      {answer}
    </div>
  );
}

Question.propTypes = {
  k: PropTypes.number,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Question
