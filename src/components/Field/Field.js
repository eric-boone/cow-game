import React from "react";

import FieldTile from "../FieldTile/FieldTile";
// import fieldCords from "../../helpers/fieldCords";

import styles from "./Field.module.css";

function Field(props) {
  const styleName = styles.fieldTile;
  const fieldFill = () => {
    let fieldTiles = [];
    for (let i = 0; i < 100; i++) {
      fieldTiles.push(
        <FieldTile key={i} styleName={styleName} props={props} nomnom={i} />
      );
    }
    return fieldTiles;
  };
  const grassEatenArray = [];

  if (props.eatGrass === true) {
    // console.log("eating");
    grassEatenArray.push(props.cowIndex);
  }

  // console.log("grassEatenArray", grassEatenArray);

  return (
    <div className={styles.field}>
      {fieldFill()}
      {/* <FieldTile props={props} styleName={styleName} nomnom={0} />
      <FieldTile props={props} styleName={styleName} nomnom={1} />
      <FieldTile props={props} styleName={styleName} nomnom={2} />
      <FieldTile props={props} styleName={styleName} nomnom={3} />
      <FieldTile props={props} styleName={styleName} nomnom={4} />
      <FieldTile props={props} styleName={styleName} nomnom={5} />
      <FieldTile props={props} styleName={styleName} nomnom={6} />
      <FieldTile props={props} styleName={styleName} nomnom={7} />
      <FieldTile props={props} styleName={styleName} nomnom={8} />
      <FieldTile props={props} styleName={styleName} nomnom={9} />
      <FieldTile props={props} styleName={styleName} nomnom={10} />
      <FieldTile props={props} styleName={styleName} nomnom={11} />
      <FieldTile props={props} styleName={styleName} nomnom={12} />
      <FieldTile props={props} styleName={styleName} nomnom={13} />
      <FieldTile props={props} styleName={styleName} nomnom={14} />
      <FieldTile props={props} styleName={styleName} nomnom={15} />
      <FieldTile props={props} styleName={styleName} nomnom={16} />
      <FieldTile props={props} styleName={styleName} nomnom={17} />
      <FieldTile props={props} styleName={styleName} nomnom={18} />
      <FieldTile props={props} styleName={styleName} nomnom={19} />
      <FieldTile props={props} styleName={styleName} nomnom={20} />
      <FieldTile props={props} styleName={styleName} nomnom={21} />
      <FieldTile props={props} styleName={styleName} nomnom={22} />
      <FieldTile props={props} styleName={styleName} nomnom={23} />
      <FieldTile props={props} styleName={styleName} nomnom={24} />
      <FieldTile props={props} styleName={styleName} nomnom={25} />
      <FieldTile props={props} styleName={styleName} nomnom={26} />
      <FieldTile props={props} styleName={styleName} nomnom={27} />
      <FieldTile props={props} styleName={styleName} nomnom={28} />
      <FieldTile props={props} styleName={styleName} nomnom={29} />
      <FieldTile props={props} styleName={styleName} nomnom={30} />
      <FieldTile props={props} styleName={styleName} nomnom={31} />
      <FieldTile props={props} styleName={styleName} nomnom={32} />
      <FieldTile props={props} styleName={styleName} nomnom={33} />
      <FieldTile props={props} styleName={styleName} nomnom={34} />
      <FieldTile props={props} styleName={styleName} nomnom={35} />
      <FieldTile props={props} styleName={styleName} nomnom={36} />
      <FieldTile props={props} styleName={styleName} nomnom={37} />
      <FieldTile props={props} styleName={styleName} nomnom={38} />
      <FieldTile props={props} styleName={styleName} nomnom={39} />
      <FieldTile props={props} styleName={styleName} nomnom={40} />
      <FieldTile props={props} styleName={styleName} nomnom={41} />
      <FieldTile props={props} styleName={styleName} nomnom={42} />
      <FieldTile props={props} styleName={styleName} nomnom={43} />
      <FieldTile props={props} styleName={styleName} nomnom={44} />
      <FieldTile props={props} styleName={styleName} nomnom={45} />
      <FieldTile props={props} styleName={styleName} nomnom={46} />
      <FieldTile props={props} styleName={styleName} nomnom={47} />
      <FieldTile props={props} styleName={styleName} nomnom={48} />
      <FieldTile props={props} styleName={styleName} nomnom={49} />
      <FieldTile props={props} styleName={styleName} nomnom={50} />
      <FieldTile props={props} styleName={styleName} nomnom={51} />
      <FieldTile props={props} styleName={styleName} nomnom={52} />
      <FieldTile props={props} styleName={styleName} nomnom={53} />
      <FieldTile props={props} styleName={styleName} nomnom={54} />
      <FieldTile props={props} styleName={styleName} nomnom={55} />
      <FieldTile props={props} styleName={styleName} nomnom={56} />
      <FieldTile props={props} styleName={styleName} nomnom={57} />
      <FieldTile props={props} styleName={styleName} nomnom={58} />
      <FieldTile props={props} styleName={styleName} nomnom={59} />
      <FieldTile props={props} styleName={styleName} nomnom={60} />
      <FieldTile props={props} styleName={styleName} nomnom={61} />
      <FieldTile props={props} styleName={styleName} nomnom={62} />
      <FieldTile props={props} styleName={styleName} nomnom={63} />
      <FieldTile props={props} styleName={styleName} nomnom={64} />
      <FieldTile props={props} styleName={styleName} nomnom={65} />
      <FieldTile props={props} styleName={styleName} nomnom={66} />
      <FieldTile props={props} styleName={styleName} nomnom={67} />
      <FieldTile props={props} styleName={styleName} nomnom={68} />
      <FieldTile props={props} styleName={styleName} nomnom={69} />
      <FieldTile props={props} styleName={styleName} nomnom={70} />
      <FieldTile props={props} styleName={styleName} nomnom={71} />
      <FieldTile props={props} styleName={styleName} nomnom={72} />
      <FieldTile props={props} styleName={styleName} nomnom={73} />
      <FieldTile props={props} styleName={styleName} nomnom={74} />
      <FieldTile props={props} styleName={styleName} nomnom={75} />
      <FieldTile props={props} styleName={styleName} nomnom={76} />
      <FieldTile props={props} styleName={styleName} nomnom={77} />
      <FieldTile props={props} styleName={styleName} nomnom={78} />
      <FieldTile props={props} styleName={styleName} nomnom={79} />
      <FieldTile props={props} styleName={styleName} nomnom={80} />
      <FieldTile props={props} styleName={styleName} nomnom={81} />
      <FieldTile props={props} styleName={styleName} nomnom={82} />
      <FieldTile props={props} styleName={styleName} nomnom={83} />
      <FieldTile props={props} styleName={styleName} nomnom={84} />
      <FieldTile props={props} styleName={styleName} nomnom={85} />
      <FieldTile props={props} styleName={styleName} nomnom={86} />
      <FieldTile props={props} styleName={styleName} nomnom={87} />
      <FieldTile props={props} styleName={styleName} nomnom={88} />
      <FieldTile props={props} styleName={styleName} nomnom={89} />
      <FieldTile props={props} styleName={styleName} nomnom={90} />
      <FieldTile props={props} styleName={styleName} nomnom={91} />
      <FieldTile props={props} styleName={styleName} nomnom={92} />
      <FieldTile props={props} styleName={styleName} nomnom={93} />
      <FieldTile props={props} styleName={styleName} nomnom={94} />
      <FieldTile props={props} styleName={styleName} nomnom={95} />
      <FieldTile props={props} styleName={styleName} nomnom={96} />
      <FieldTile props={props} styleName={styleName} nomnom={97} />
      <FieldTile props={props} styleName={styleName} nomnom={98} />
      <FieldTile props={props} styleName={styleName} nomnom={9} /> */}
    </div>
  );
}

export default Field;
