/** By importing the combineReducers functions, allows us to combine
 * two reducers and export them all as default.
 */
import { combineReducers } from 'redux';

import { SET_STACK, LOAD_STACKS } from '../actions';

/**
 * This stack function represents the reducer, which will
 * be dynamic.
 * Each reducer takes two parameters (incomming in presence
 * state, incoming action)
 * 
 * @param state sets the state to an empty object in case it is
 * undefinied
 * @param action created by the action creators
 */
function stack(state = {}, action) {
  switch (action.type){
    case SET_STACK:
      return action.stack;
    default: 
      return state;
  }
}

function stacks(state = [], action) {
  switch (action.type) {
    case LOAD_STACKS:
      return action.stacks;
    default:
      return state;
  }
}

export default combineReducers({ stack, stacks}); // Exporting two reducers as default.
