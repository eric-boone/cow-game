import React from "react";

// import styles from "./FieldTile.module.css";

function FieldTile(props) {

  // const bacon = () => {
  //   if (props.props.eatGrass === true && props.props.cowIndex === props.nomnom) {
  //     return
  //   }
  // }

  return (
    <div
      // className={styles.fieldTile}
      className={props.styleName}
    >
      {/* <small>
        {props.props.cowIndex} / {props.nomnom}
      </small> */}
      {/* {console.log("eatenArray", eatenArray)} */}
    </div>
  );
}

export default FieldTile;
