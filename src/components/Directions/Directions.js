import React from "react";

function Directions(props) {

  // console.log("props", props);

  return (
    <div>
      <p>Directions:</p>
      <div>
        {props.directionsArray.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
    </div>
  );
}

export default Directions;
