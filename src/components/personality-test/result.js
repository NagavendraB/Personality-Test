import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

const Result = (props) => (
  <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}>
    <div className="result-text">{props.resultText}</div>
    <span>{props.resultBody}</span>
  </CSSTransitionGroup>
);

export default Result;

Result.propTypes = {
  resultText: PropTypes.string,
  resultBody: PropTypes.string
};
