import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { addStack } from '../actions';

class StackForm extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      cards: []
    }
  }

  addCard() {
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: '' });
    this.setState({ cards });
  }

  updateCardValue(event, index, value) {
    const { cards } = this.state;

    cards[index][value] = event.target.value;

    this.setState({ cards });
  }

  addStack() {
    // console.log('StackForm state', this.state);
    /**
     * Now the this.state represents a new whole stack, which
     * can be passed to the addStack function now.
     */
    this.props.addStack(this.state);

  }

  render() {
    // console.log('StackForm state', this.state);
    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            {' '}
            <FormControl onChange={event => this.setState({ title: event.target.value })}/>
          </FormGroup>
          {
            this.state.cards.map((card, index) => {
              return(
                <div key={card.id}>
                  <br />
                  <FormGroup>
                    <ControlLabel>Prompt:</ControlLabel>
                    {' '}
                    <FormControl
                      onChange={event => this.updateCardValue(event, index, 'prompt')}
                    />
                    {' '}
                    <ControlLabel>Answer:</ControlLabel>
                    {' '}
                    <FormControl 
                      onChange={event => this.updateCardValue(event, index, 'answer')}
                    />
                  </FormGroup>
                </div>
              )
            })
          }
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>
        {' '}
        <Button onClick={() => this.addStack()}>Save New Stack</Button>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);

