import React from 'react'

import styles from "./Player.module.css";
import fieldCords from "../../helpers/fieldCords";

function Player({cowDirection, cowIndex}) {

  const cowPosition = {
      marginLeft: `${fieldCords[cowIndex].pieceX}px`,
    marginTop: `${fieldCords[cowIndex].pieceY}px`,
    
  };

  return (
    <div className={styles.cow} style={cowPosition}>
      <p>{cowDirection}</p>
    </div>
  );
}

export default Player
