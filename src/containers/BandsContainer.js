import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'
import addBand from '../actions/bands'

class BandsContainer extends Component {  
  renderBands = () => {
    return (
      this.props.bands.map((band, i) => {
        return (
          <li key={i} >Band Name: {band.name}</li>
        )
      })
    )
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <hr/>
        {this.renderBands()}
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    bands: store.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)