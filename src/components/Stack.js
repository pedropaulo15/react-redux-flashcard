import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects components to the store
import { Link } from 'react-router-dom';

import Card from './Card';

/**
 * Since the Stack component does not have state, it can be
 * created as an stateless component.
 * 
 * The props would normaly be accesible by this.props.stack; 
 * however it would be better to pass it as a param for the
 * stateless component, by passing { stack: { title, cards } }.
 * 
 * @param {props} title and cards from the stack
 */
export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <Link className='link-home' to='/'>
        <h4>Home</h4>
      </Link>
      <h3>{title}</h3>
      <br />
      {
        cards.map(card => {
          return(
            <div key={card.id}>
              <Card key={card.id} card={card}/>
            </div>
          )
        })
      }
    </div>
  )
}

/** This function maps the state of the redux store, on the
 * props of the this Stack Component.
 * So the stack objects from the store can be accessible
 * within this components throught this.props.
 * 
 * @example
 * <h3>{this.props.stack.title}</h3>
 * 
 * @param state represents the redux store
 */
function mapStateToProps(state) {
  return { stack: state.stack } // this state is coming from the reducer
}

export default connect(mapStateToProps, null)(Stack);