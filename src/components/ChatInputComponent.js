/* eslint-disable no-func-assign */
/* eslint-disable import/no-duplicates */
import React from 'react';
import axios from 'axios';

import * as style from './ChatDisplay.scss';


const postUrl = 'https://inbound-cs98-hack-a-thing-2.herokuapp.com/api/receiveMsg';


function addUserInput(text) {
  this.setState({
    // eslint-disable-next-line react/no-access-state-in-setstate
    userInputs: this.state.userInputs.concat(text),
  });
}

function addServerOutput(text) {
  this.setState({
    // eslint-disable-next-line react/no-access-state-in-setstate
    serverOutputs: this.state.serverOutputs.concat(text),
  });
}

class MessageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputs: [],
      serverOutputs: [],
    };

    addUserInput = addUserInput.bind(this);
    addServerOutput = addServerOutput.bind(this);
  }

  render() {
    const messages = [];
    for (let i = this.state.userInputs.length - 1; i >= 0; i -= 1) {
      messages.push(<span className={style.input} key={`input${i}`}>{this.state.userInputs[i]}</span>);
      if (i < this.state.serverOutputs.length) {
        messages.push(<span className={style.output} key={`output${i}`}>{this.state.userInputs[i]}</span>);
        messages.push(<span className={style.moreSpace} key={`space${i}`} />);
      } else {
        messages.push(<span className={style.moreSpace} key={`space${i}`} />);
      }
    }
    return (
      <div>
        {messages}
      </div>
    );
  }
}

class InputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.valueChange = this.valueChange.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  valueChange(event) {
    this.setState({ value: event.target.value });
  }

  submitValue(event) {
    // eslint-disable-next-line no-alert
    event.preventDefault();
    if (this.state.value !== '') {
      addUserInput(this.state.value);
      axios.post(postUrl, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          msg: `${this.state.value}`,
        },
      }).then(response => addServerOutput(response.data.turn));
      this.setState({ value: '' });
    }
  }


  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <form onSubmit={this.submitValue}>
            <div className="col-11">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="inputBox">Ask me something:
                <input className="mt-1" type="text" id="inputBox" value={this.state.value} onChange={this.valueChange} />
              </label>
            </div>
            <div className="col-1">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <br />
        <div>
          <MessageView />
        </div>
      </div>
    );
  }
}

export default InputView;
