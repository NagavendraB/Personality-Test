import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
  <div className="answer-option">
    <select 
      id="mySelect" 
      className="answer-area answer-select" 
      onChange={props.onAnswerSelected}>
      <option value="" disabled selected>Select your option</option>
      { props.answerOptions.map((value, index) => <option key={index} value={value}>{value}</option>) };
    </select>
  </div>
);

export default Select;

Select.propTypes = {
  onAnswerSelected: PropTypes.func
};