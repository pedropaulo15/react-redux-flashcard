import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects components to the store
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack } from '../actions';

class StackList extends Component {
  render() {
    // console.log('props', this.props);
    return (
      <div>
        {
          stacks.map(stack => {
            return(
              <Link 
                key={stack.id} 
                to='/stack'
                onClick={() => this.props.setStack(stack)}
              >
                <h4 key={stack.id}>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

/** 
 * Connects the setStack action with the props of the StackList
 * component.
 * 
 * So by clicking on the link it will dispatch the setStack
 * action.
 * 
 * @example onClick={() => this.props.setStack(stack)} See the Link
 * above
 */
export default connect(null, { setStack })(StackList);