import React from 'react';

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
    alert(`User input: ${this.state.value}`);
    event.preventDefault();
  }


  render() {
    return (
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
    );
  }
}

export default InputView;
