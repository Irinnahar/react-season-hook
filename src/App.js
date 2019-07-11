import React, { Component } from 'react';

import './App.css';
import Season from "./components/season";
import Spinner from "./components/Spinner";

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

  renderbody(){
    if(!this.state.error && this.state.lat) {
      return (
        <div>
          <Season lat = {this.state.lat} />
        </div>
      )
    }
     return <Spinner message="Please allow us to access your location"/>
  }
  render() {
    return(
      <div className="content-wrapper">
        {this.renderbody()}
      </div>
    )

  }
}


export default App;
