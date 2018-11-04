import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <div className="answer-option">
    <textarea 
      className="answer-area" 
      rows="4" 
      cols="50" 
      onChange={props.onAnswerSelected}>
    </textarea>
  </div>
);

export default TextArea;

TextArea.propTypes = {
  answerType: PropTypes.string,
  onAnswerSelected: PropTypes.func
};