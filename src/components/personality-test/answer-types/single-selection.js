import React from 'react';
import PropTypes from 'prop-types';

const SingleSelection = (props) => (
  <li className="answer-option">
    <input
      type="radio"
      className="radio-custom-button"
      name="radio-group"
      checked={props.answerType === props.answer}
      id={props.answerType}
      value={props.answerType}
      onChange={props.onAnswerSelected}
    />
    <label className="radio-custom-label" htmlFor={props.answerType}>
      {props.answerContent}
    </label>
  </li>
);

export default SingleSelection;

SingleSelection.propTypes = {
  answerType: PropTypes.string,
  answerContent: PropTypes.string,
  answer: PropTypes.string,
  onAnswerSelected: PropTypes.func
};