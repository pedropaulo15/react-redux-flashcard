import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // This component provides the store to the entire app.

import App from './components/app';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import { setStack } from './actions';
import rootReducer from './reducers';

import './index.css';

/**
 * Creating a store by using the createStore functions from
 * redux.
 * 
 * @param rootReducer Which holds all the reducer logic
 */
const store = createStore(rootReducer);
/** The subscribe function fire some code, whenever the 
 * store change, it can work as a logger of the app.
 */
store.subscribe(() => console.log('store', store.getState()));
/** 
 * The dispatch function actually dispatches an action to 
 * the reducers, so they can update the store properly.
 */
store.dispatch(setStack({id: 0, title: 'example', cards: []}));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/stack' component={ Stack } />
        <Route path='/stack_form' component={ StackForm } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);