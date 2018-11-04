import React, { Component } from 'react';
import axios from 'axios';

// Components
import {PersonalityTest, Result, Error, Loader} from './components';

// Helpers
import {QUESTIONS_END_POINT} from './helpers/configurations';
import {getUserAnswers} from './helpers/utils';

// Css
import './assets/css/personality-test.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: 0,
      allQuestions: [],
      userCurrentAnswer: '',
      loading: false,
    };
    this.userAllAnswers = [];
    this.userMultipleAnswers = [];
  }

  componentDidMount() {
    this.loadData();
  }

  // loadData() is used to fetch the data from service
  loadData = () => {
    this.setState({ loading: true });
    return axios.request(QUESTIONS_END_POINT).then(result => {   
      this.setState({
        loading: false,
        error: false,
        allQuestions: result.data
      });
    })
    .catch(error => this.setState({loading: false, error}));
  }

  // onClickNextQuestion() will store the user answers for current question 
  onClickNextQuestion = () => {
    this.storeUserAnswers();
    setTimeout(() => this.setNextQuestion(), 300);
  }


  // setNextQuestion() will set the next question on screen 
  setNextQuestion = () => {
    this.userMultipleAnswers = [];
    
    this.setState((state, props) => ({
      questionId: state.questionId + 1,
      userCurrentAnswer: ''
    }));
  }

  // storeCurrentQuestionAnswer() will store the user answer for current question
  storeCurrentQuestionAnswer = (event) => {
    const {allQuestions, questionId} = this.state;
    const questionType = allQuestions[questionId].type;
    
    this.setState({
      userCurrentAnswer: getUserAnswers({
        value: event.currentTarget.value, 
        type: questionType, 
        userAnswers: this.userMultipleAnswers
      })
    });
  }

  // storeUserAnswers() will store the all user selected answers and corresponding questions
  storeUserAnswers = () => {
    const {questionId, allQuestions, userCurrentAnswer} = this.state;

    this.userAllAnswers[questionId] = {
      question: allQuestions[questionId].data.question,
      userCurrentAnswer: userCurrentAnswer
    };
    
    // Store User answers in local storage
    if (allQuestions.length - 1 > questionId) {
      localStorage.setItem("User_Answers", JSON.stringify(this.userAllAnswers));
      console.log(JSON.parse(localStorage.getItem("User_Answers")));
    }
  }

  render() {
    const {loading, error, allQuestions, questionId, userCurrentAnswer} = this.state;
    
    // Check for more Questions
    const isTestRunning = allQuestions.length && allQuestions.length - 1 > questionId;

    // Read Question, Question Type, Answer Options, Answer body, isRequired condition
    const question = allQuestions[questionId] && allQuestions[questionId].data.question;
    const questionType = allQuestions[questionId] && allQuestions[questionId].type;
    const answerOptions = allQuestions[questionId] && allQuestions[questionId].data.answers;
    const questionBody = allQuestions[questionId] && allQuestions[questionId].data.body;
    const isRequired = allQuestions[questionId] && allQuestions[questionId].isRequired;
    
    const answer = questionType !== 'single'  ? userCurrentAnswer[0] : userCurrentAnswer;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <Error loadData={this.loadData} />;
    }

    return (
      <div className="app">
        <div className="app-header">
          <h2>Personality Test</h2>
        </div>
        { isTestRunning  ? 
          <PersonalityTest
            questionId={questionId + 1}
            questionType={questionType}
            question={question}
            answerOptions={answerOptions}
            questionBody={questionBody}
            questionTotal={allQuestions.length - 1}
            answer={answer}
            isRequired={isRequired}
            onAnswerSelected={this.storeCurrentQuestionAnswer}
            onClickNextQuestion={this.onClickNextQuestion}
          /> : 
          <Result
            resultText={question}
            resultBody={questionBody}
          />
        }
      </div>
    );
  }
}

export default App;