import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

// Components
import {
  PersonalityTest, 
  Result, 
  Question, 
  QuestionCount, 
  AnswerOption, 
  MultipleSelection, 
  Select, 
  SingleSelection, 
  TextArea
} from '../components';

Enzyme.configure({ adapter: new Adapter() });

it('`PersonalityTest` exist and be a component', () => expect(PersonalityTest).toBeInstanceOf(Function));
it('`Result` exist and be a component', () => expect(Result).toBeInstanceOf(Function));
it('`Question` exist and be a component', () => expect(Question).toBeInstanceOf(Function));
it('`QuestionCount` exist and be a component', () => expect(QuestionCount).toBeInstanceOf(Function));
it('`MultipleSelection` exist and be a component', () => expect(MultipleSelection).toBeInstanceOf(Function));
it('`Select` exist and be a component', () => expect(Select).toBeInstanceOf(Function));
it('`SingleSelection` exist and be a component', () => expect(SingleSelection).toBeInstanceOf(Function));
it('`TextArea` exist and be a component', () => expect(TextArea).toBeInstanceOf(Function));

it('`QuestionCount` component should render question number and question count', () => {
  const wrapper = shallow(<QuestionCount counter={1} total={1} />);
  expect(wrapper.find('.question-count')).toBeDefined();
});

it('`Question` component should render provided question and question body', () => {
  const wrapper = shallow(<Question content="This is Question" questionBody="This is Question Body" />);
  expect(wrapper.find('.question')).toBeDefined();
});

it('`SingleSelection` component should render option', () => {
  const wrapper = shallow(
    <SingleSelection 
      answer="all"
      answerContent="option 1" />);
  expect(wrapper.find('.answer-option')).toBeDefined();
});

it('`MultipleSelection` component should render list of options', () => {
  const items = [{
    "options": [{
        "label": "option1"
      },
      {
        "label": "option2"
      },
      {
        "label": "option3"
      },
    ]   
  }];
  const wrapper = shallow(
    <MultipleSelection 
      answerOptions={items}
      answer='two' />);
  expect(wrapper.find('.multipl-options')).toBeDefined();
});

it('`Select` component should render provided array of options in dropdown', () => {
  const selectOptions = [1, 3, 4, 5, 87, 85];
  const wrapper = shallow(<Select answerOptions={selectOptions} />);
  expect(wrapper.find('#mySelect')).toBeDefined();
});

it('`TextArea` component should provide text area as an option for a question', () => {
  const wrapper = shallow(<TextArea />);
  expect(wrapper.find('.answer-area')).toBeDefined();
});

it('`Result` component should provide text area as an option for a question', () => {
  const wrapper = shallow(
    <Result
      resultText='This is Result Text'
      resultBody='This is Result Body'
    />);
  expect(wrapper.find('.result-text')).toBeDefined();
});