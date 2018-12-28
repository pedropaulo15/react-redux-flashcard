import React from 'react';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const app = enzyme.shallow(<App />);
  /**
   * The app object comes with the debug function, which
   * we can check in what way the JSX is rendered, so
   * we can expeect the correct component on the tests.
   * 
   * @example
   * console.log(app.debug());
   */

  it('renders the `Flashcard Pro` title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');
  });

  it('renders the StackList component', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  });

  it('renders a link to create new stacks', () => {
    expect(app.find('h4').text()).toEqual('Add new Stack');
  });
});