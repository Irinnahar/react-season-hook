import React, { Component } from 'react';

import './App.css';
import Searchbar from './components/Searchbar/searchbar';

class App extends Component {

  render() {
    return(
     <div className="container">
       <Searchbar />
     </div>
    )

  }
}


export default App;
