import React from "react";

import styles from "./FieldTile.module.css";

function FieldTile(props) {

  return (
    <div
      className={
        props.nomnom === props.props.cowIndex && props.eatGrass === true
          ? styles.eaten
          : styles.fieldTile
      }
    >
      {/* {props.props.cowIndex} */}
    </div>
  );
}

export default FieldTile;
