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
        <form onSubmit={this.handleSubmit}>
          <p>BandName:</p>
          <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name} /><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
