import React, { PropTypes } from 'react';

const Title = ({ title, k }) => {
  return (
    <h1
      className="title"
      key={k}>{title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title;
