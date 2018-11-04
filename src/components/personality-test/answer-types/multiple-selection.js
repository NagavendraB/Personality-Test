import React from 'react';
import PropTypes from 'prop-types';

const MultipleSelection = (props) => (
  <div className="multipl-options">
    {props.answerOptions.map((answerOption, i) => (
      <div key={i}>
        <h4>{answerOption.label}</h4>
          <ul className="answer-options">
            {answerOption.options.map((option, index) => (
              <li className="answer-option" key={index}>
                <input
                  type="checkbox"
                  className="radio-custom-button multiple"
                  name="radio-group"
                  id={`${answerOption.key} ${option.label}`}
                  value={`${answerOption.key} ${option.label}`}
                  onChange={props.onAnswerSelected} />
                <label className="radio-custom-label" htmlFor={`${answerOption.key} ${option.label}`}>
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
    ))}
  </div>
);

export default MultipleSelection; 

MultipleSelection.propTypes = {
  answerOptions: PropTypes.array
};