import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';

// Components
import {
  Question, 
  QuestionCount, 
  TextArea, 
  Select, 
  SingleSelection, 
  MultipleSelection
} from '.';

const PersonalityTest = (props) => {

  const isNextDisabled = props.isRequired && !props.answer; 
  const NextBtnClassName = classnames("next-question", {
    "next-question-disabled" : isNextDisabled
  });

  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} questionBody={props.questionBody} />
        { props.questionType === 'single' && 
          <ul className="answer-options">
            {props.answerOptions.map(key => (
              <SingleSelection 
                answerType={key.label}
                answer={props.answer}
                answerContent={key.label}
                onAnswerSelected={props.onAnswerSelected} />
            ))}
          </ul>
        }
        { props.questionType === 'multiple' &&
          <MultipleSelection 
            answerOptions={props.answerOptions}
            answer={props.answer}
            onAnswerSelected={props.onAnswerSelected} />
        }
        { props.questionType === 'textarea' &&
          <TextArea onAnswerSelected={props.onAnswerSelected} />
        }
        { props.questionType === 'select' && 
          <Select 
            answerOptions={props.answerOptions}
            onAnswerSelected={props.onAnswerSelected} />
        }
        <div className={NextBtnClassName} onClick={!isNextDisabled ? props.onClickNextQuestion : null}>Next Question ></div>
      </div>
    </CSSTransitionGroup>
  );
}

export default PersonalityTest;

PersonalityTest.propTypes = {
  answer: PropTypes.string,
  answerOptions: PropTypes.array,
  question: PropTypes.string,
  questionId: PropTypes.number,
  questionTotal: PropTypes.number,
  onAnswerSelected: PropTypes.func
};