import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects components to the store
import { Link } from 'react-router-dom';

import Card from './Card';

class Stack extends Component {
  render() {
    // console.log('stack props', this.props);
    const { title, cards } = this.props.stack;

    return (
      <div>
        <Link to='/'>Home</Link>
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
  return { stack: state } // this state is coming from the reducer
}

export default connect(mapStateToProps, null)(Stack);