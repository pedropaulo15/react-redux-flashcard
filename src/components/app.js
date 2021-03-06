import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

const App = () => {
  return (
    <div>
      <h2>Flashcard Pro</h2>
      <hr />
      <StackList />
      <hr />
      <Link className='' to='/stack_form'>
        <h4>Add new Stack</h4>
      </Link>
    </div>
  )
}

export default App;