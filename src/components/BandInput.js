/*
  BandInput component
    1) has an text input field
    2) has an initial state with text key set to empty string
    3) changes the local state on input change
    4) has a prop, addBand, that is called when the form is submitted
    5) using addBand, calls dispatch when form is submitted

  Redux
    ✓ updates the store when a form is submitted


*/



import React, { Component } from 'react'



class BandInput extends Component {

constructor() {
  super();
  this.state = {
    name: "",
  };
}

handleOnChange = (event) => {
  this.setState({
    name: event.target.value
  });
};


  handleSubmit = event => {
  event.preventDefault()
  this.props.addBand(this.state)
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" onChange={this.handleOnChange} value={this.state.name}/> 
          <input value="submit" type="submit" />
        </form>
        {this.state.name}
      </div>
    );
  }
};


export default BandInput
