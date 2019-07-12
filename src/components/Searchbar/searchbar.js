import React, { Component } from 'react';

class Searchbar extends Component {
  onInputChange(event){
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="card p-3 m-5" >
        <label>Image Search</label>
        <input type="text" onChange = {this.onInputChange}  />
      </div>
    )
  }
}

export default Searchbar;