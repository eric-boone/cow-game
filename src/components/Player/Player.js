import React from "react";

import styles from "./Player.module.css";
import fieldCords from "../../helpers/fieldCords";
import cowNorth from "../../images/cow-north.png";
import cowEast from "../../images/cow-east.png";
import cowSouth from "../../images/cow-south.png";
import cowWest from "../../images/cow-west.png";

function Player({ cowDirection, cowIndex }) {
  const cowPosition = {
    marginLeft: `${fieldCords[cowIndex].pieceX}px`,
    marginTop: `${fieldCords[cowIndex].pieceY}px`,
  };

  const cowImage = () => {
    if (cowDirection === "N") {
      return <img src={cowNorth} alt="cow facing north" />;
    }
    if (cowDirection === "E") {
      return <img src={cowEast} alt="cow facing east" />;
    }
    if (cowDirection === "S") {
      return <img src={cowSouth} alt="cow facing south" />;
    }
    if (cowDirection === "W") {
      return <img src={cowWest} alt="cow facing west" />;
    }
  };

  return (
    <div className={styles.cow} style={cowPosition}>
      <p>{cowImage()}</p>
    </div>
  );
}

export default Player;
