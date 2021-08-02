import React from "react";

import FieldTile from "../FieldTile/FieldTile";
// import fieldCords from "../../helpers/fieldCords";

import styles from "./Field.module.css";

function Field(props) {
  const fieldFill = () => {
    let fieldTiles = [];
    for (let i = 0; i < 100; i++) {
      fieldTiles.push(<FieldTile key={i} props={props} nomnom={i} />);
    }
    return fieldTiles;
  };

  return <div className={styles.field}>{fieldFill()}</div>;
}

export default Field;
