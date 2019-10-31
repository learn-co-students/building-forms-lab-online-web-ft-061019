// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''
  }

  changeHanlder(event) {
    this.setState({
      name: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
<form onSubmit={event => this.submitHandler(event)}>
          <p>
            <input type='text' onChange={event => this.changeHanlder(event)}/>
          </p>
          <input type='submit'/>
        </form>
    </div>
    )
  }
}

export default BandInput
