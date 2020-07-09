  /*
Bands Container
    ✓ is a child of the app component
    ✓ renders a list element for each of the bands in 
     ✓ renders each li with the correct name
  */




import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'
import addBand from '/Users/dawn/building-forms-lab-online-web-ft-061019/src/actions/addBand.js'

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