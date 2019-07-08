import React, {Component} from 'react';

import './App.css';

class App extends Component {
  state= {
    lat : null,
    error: ''
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      postion => {
        this.setState({lat : postion.coords.latitude})
      },
      error => {
        this.setState({
          error : error.message
        })
      }
    )
    if(this.state.lat != null && this.state.error == '' ){
      return <div>Longitude: {this.state.lat}</div>
    }
    
    if(this.state.lat == null && this.state.error != '' ){
      return <div>Error: {this.state.error}</div>
    }

    return <div>Loading</div>
    
  }
}


export default App;
