import React from "react";

import styles from "./Directions.module.css";

function Directions(props) {
  console.log("props", props);
  return (
    <div>
      <h2>Directions:</h2>
      <div className={styles.directions}>
        {props.directionsArray.map((instruction, index) => {
          if (props.cowDirectionsIndex === index) {
            return <p className={styles.active} key={index}>{instruction}</p>;
          }
          return <p key={index}>{instruction}</p>;
        })}
      </div>
    </div>
  );
}

export default Directions;
