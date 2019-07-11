import React from 'react';
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div id="outerdiv">
      <div class="lds-ripple">
        <div></div>
        <div></div>
        </div>
        <div><h4>{props.message}</h4></div>
    </div>
  )
}

Spinner.defaultProps = {
  message : 'Loading...'
}
export default Spinner