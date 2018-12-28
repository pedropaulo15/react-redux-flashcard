import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

import { Stack } from './Stack';
import { stack } from '../data/fixtures';

const props = { stack };


describe('Stack', () => {
  /**
   * As the Stack component is a child component, it expects
   * some props to be sent in order to know the current state
   * that it will be rendered.
   * 
   * So in this case we need to set the props above on the global
   * scope, and use the spread opperator, to set those props
   * to the Stack component.
   */
  const stack = enzyme.shallow(<Stack {...props}/>);

  it('renders the link Home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });

  it('renders the title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title);
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  });
});