import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects components to the store
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

export class StackList extends Component {

  /**
   * Just loading the stack list from the store once and on the
   * initial load.
   */
  componentDidMount() {
    if (this.props.stacks.length === 0){
      this.props.loadStacks(stacks);
    }
  }

  render() {
    // console.log('props', this.props);
    return (
      <div>
        {
          this.props.stacks.map(stack => {
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

function mapStateToProps(state) {
  return { stacks: state.stacks };
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
export default connect(mapStateToProps, { setStack, loadStacks })(StackList);