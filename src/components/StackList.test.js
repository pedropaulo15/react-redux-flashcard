import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exec } from 'child_process';
enzyme.configure({ adapter: new Adapter() });

import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe('StackList', () => {
  const stackList = enzyme.shallow(<StackList {...props}/>);

  it('renders the correct number of stacks', () => {
    // console.log(stackList.debug());
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });
});