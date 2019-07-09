import React, { Component } from 'react';

import './App.css';
import Season from "./components/season";

class App extends Component {
  state = {
    lat: null,
    error: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      postion => {
        this.setState({ lat: postion.coords.latitude })
      },
      error => {
        this.setState({
          error: error.message
        })
      }
    )
  }
  render() {

    return (
      <div>
        <Season lat = {this.state.lat} />
      </div>
    )

  }
}


export default App;
