import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

import { StackForm } from './StackForm';
import { stack } from '../data/fixtures';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
  const stackForm = enzyme.shallow(<StackForm />);
  
  it('renders the Link Home', () => {
    // console.log(stackForm.debug());
    expect(stackForm.find('Link h4').first().text()).toEqual('Home');
  });

  it('renders the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders the Form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it('renders the button to add a new card', () => {
    expect(stackForm.find('Button').first().props().children).toEqual('Add Card');
  });

  it('renders the button to save new stack', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save New Stack');
  });

  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: changeTitle} });
    });

    it('updates the title in state', () => {
      // console.log(stackForm.state());
      expect(stackForm.state().title).toEqual(changeTitle);
    });
  });

  describe('when adding a new card', () => {
    // console.log(stackForm.state());
    beforeEach(() => {
      stackForm.find('Button').first().simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('adds a new card to the state', () => {
      // console.log(stackForm.state());
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:')
    });

    it('renders the answer section', () => {
      expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:')
    });

    describe('and updating the card prompt', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1).simulate('change', { target: { value: changePrompt }});
      });

      it('updates the prompt in the state', () => {
        // console.log(stackForm.state());
        expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
      })
    });

    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2).simulate('change', { target: { value: changeAnswer} });
      });

      it('updates the answer in the state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
      });
    });
  });
});
