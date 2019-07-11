import React from 'react';
import "./season.css";

const seasonConfig  = {
  winter : {
    text: 'Its winter here',
    icon: 'fa-snowflake'
  },
  summer : {
    text: 'Its summer here',
    icon: 'fa-sun'
  }
}

const DetermineSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}


const Season = (props) => {
  const season = DetermineSeason(props.lat, new Date().getMonth());
  const {text, icon } = seasonConfig[season];
  return (
    <div className="season-wrap" id={season === 'summer' ? "summer-wrap" : "winter-wrap"}>
      <i className={`icon-left  fas ${icon}`}></i>
      <h2>{text} </h2>
      <i className={`icon-right fas ${icon}`}></i>
    </div>
  )
}

export default Season;