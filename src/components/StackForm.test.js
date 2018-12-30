import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

import { StackForm } from './StackForm';
import { stack } from '../data/fixtures';

describe('StackForm', () => {
  const stackForm = enzyme.shallow(<StackForm />);
  
  it('renders the Link Home', () => {
    console.log(stackForm.debug());
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
});
