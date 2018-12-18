import { SET_STACK } from '../actions';

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

export default stack;