import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

import { Card } from './Card';
import { card } from '../data/fixtures';

const props = card;

describe('Card', () => {
  const card = enzyme.shallow(<Card {...props}/>);

  it('sets `reveal` to be `false`', () => {
    // console.log(card.debug());
    expect(card.state().reveal).toBe(false);
  });

  it('renders the card prompt', () => {
    expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });

  it('renders the card answer', () => {
    expect(card.find('.card-answer h4').text()).toEqual(props.card.answer);
  });

  it('applies the `text-hidden` class to the card answer', () => {
     expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
  });

  describe('when clicking on the card component', () => {
    beforeEach(() => {
      card.simulate('click');
    });

    it('updates `reveal` to be `true`', () => {
      // console.log(card.state());
      expect(card.state().reveal).toBe(true);
    });

    it('applies the `text-revealed` class to the card answer', () => {
      expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
    });
  });
});
