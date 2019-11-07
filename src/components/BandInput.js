// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h3>Band Input</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit" value="Submit"/>

        </form>
        
      </div>
    )
  }
}

export default BandInput
