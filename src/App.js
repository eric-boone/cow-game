import { useState, useEffect } from "react";
import "./App.css";

import Field from "./components/Field/Field";
import Player from "./components/Player/Player";
import Controls from "./components/Controls/Controls";
import Directions from "./components/Directions/Directions";
// import fieldCords from "./helpers/fieldCords";
import {
  ef,
  eb,
  wf,
  wb,
  nf,
  nb,
  sf,
  sb,
  etr,
  etl,
  ntr,
  ntl,
  str,
  wtr,
  wtl,
  stl,
} from "./helpers/cowMove";

function App() {
  const [cowDirection, setCowDirection] = useState("E");
  const [cowIndex, setCowIndex] = useState(0);
  const [directionsArray, setDirectionsArray] = useState([]);
  const [cowDirectionsIndex, setCowDirectionsIndex] = useState(undefined);
  const [eatGrass, setEatGrass] = useState(false);

  let newDirectionsArray = [...directionsArray];

  useEffect(() => {
    if (cowDirectionsIndex < directionsArray.length) {
      setTimeout(() => {
        // console.log("thing", directionsArray[cowDirectionsIndex]);
        // handle eat
        if (directionsArray[cowDirectionsIndex] === "eat") {
          setEatGrass(true);
          setCowDirectionsIndex((cowDirectionsIndex) => cowDirectionsIndex + 1);
        }
        // handle forwards
        if (
          cowDirection === "N" &&
          directionsArray[cowDirectionsIndex] === "forward"
        ) {
          nf(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "E" &&
          directionsArray[cowDirectionsIndex] === "forward"
        ) {
          setEatGrass(false);
          ef(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "S" &&
          directionsArray[cowDirectionsIndex] === "forward"
        ) {
          sf(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "W" &&
          directionsArray[cowDirectionsIndex] === "forward"
        ) {
          wf(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        // handle backwards
        if (
          cowDirection === "N" &&
          directionsArray[cowDirectionsIndex] === "backward"
        ) {
          nb(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "E" &&
          directionsArray[cowDirectionsIndex] === "backward"
        ) {
          eb(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "S" &&
          directionsArray[cowDirectionsIndex] === "backward"
        ) {
          sb(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        if (
          cowDirection === "W" &&
          directionsArray[cowDirectionsIndex] === "backward"
        ) {
          wb(cowIndex, setCowIndex, setCowDirectionsIndex);
        }
        // handle right turns
        if (
          cowDirection === "N" &&
          directionsArray[cowDirectionsIndex] === "turn right"
        ) {
          ntr(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "E" &&
          directionsArray[cowDirectionsIndex] === "turn right"
        ) {
          etr(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "S" &&
          directionsArray[cowDirectionsIndex] === "turn right"
        ) {
          str(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "W" &&
          directionsArray[cowDirectionsIndex] === "turn right"
        ) {
          wtr(setCowDirection, setCowDirectionsIndex);
        }
        // handle left turns
        if (
          cowDirection === "N" &&
          directionsArray[cowDirectionsIndex] === "turn left"
        ) {
          ntl(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "E" &&
          directionsArray[cowDirectionsIndex] === "turn left"
        ) {
          etl(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "S" &&
          directionsArray[cowDirectionsIndex] === "turn left"
        ) {
          stl(setCowDirection, setCowDirectionsIndex);
        }
        if (
          cowDirection === "W" &&
          directionsArray[cowDirectionsIndex] === "turn left"
        ) {
          wtl(setCowDirection, setCowDirectionsIndex);
        }
      }, 1000);
    }
    if (cowDirectionsIndex === directionsArray.length) {
      handleClearDirections();
    }
  }, [cowDirectionsIndex]);

  const handlePlay = () => {
    let newIndex = 0;
    setCowDirectionsIndex(newIndex);
  };

  const handleForward = () => {
    switch (cowDirection) {
      case "N":
        newDirectionsArray.push("forward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "E":
        newDirectionsArray.push("forward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "S":
        newDirectionsArray.push("forward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "W":
        newDirectionsArray.push("forward");
        setDirectionsArray(newDirectionsArray);
        break;
      default:
        break;
    }
  };

  const handleBackward = () => {
    switch (cowDirection) {
      case "N":
        newDirectionsArray.push("backward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "E":
        newDirectionsArray.push("backward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "S":
        newDirectionsArray.push("backward");
        setDirectionsArray(newDirectionsArray);
        break;
      case "W":
        newDirectionsArray.push("backward");
        setDirectionsArray(newDirectionsArray);
        break;
      default:
        break;
    }
  };

  const handleTurnLeft = () => {
    switch (cowDirection) {
      case "N":
        newDirectionsArray.push("turn left");
        setDirectionsArray(newDirectionsArray);
        break;
      case "E":
        newDirectionsArray.push("turn left");
        setDirectionsArray(newDirectionsArray);
        break;
      case "S":
        newDirectionsArray.push("turn left");
        setDirectionsArray(newDirectionsArray);
        break;
      case "W":
        newDirectionsArray.push("turn left");
        setDirectionsArray(newDirectionsArray);
        break;
      default:
        break;
    }
  };

  const handleTurnRight = () => {
    switch (cowDirection) {
      case "N":
        newDirectionsArray.push("turn right");
        setDirectionsArray(newDirectionsArray);
        break;
      case "E":
        newDirectionsArray.push("turn right");
        setDirectionsArray(newDirectionsArray);
        break;
      case "S":
        newDirectionsArray.push("turn right");
        setDirectionsArray(newDirectionsArray);
        break;
      case "W":
        newDirectionsArray.push("turn right");
        setDirectionsArray(newDirectionsArray);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setCowDirection("E");
    setCowIndex(0);
    setDirectionsArray([]);
    setCowDirectionsIndex(undefined);
  };

  const handleClearDirections = () => {
    setDirectionsArray([]);
  };

  const handleEatGrass = () => {
    // console.log("eat grass");
    // setEatGrass(true);
    newDirectionsArray.push("eat");
    setDirectionsArray(newDirectionsArray);
  };

  return (
    <div className="grazing-cow-game">
      <div className="left-panel">
        <div className="controls">
          <Controls
            handleForward={handleForward}
            handleBackward={handleBackward}
            handleTurnLeft={handleTurnLeft}
            handleTurnRight={handleTurnRight}
            handleReset={handleReset}
            handlePlay={handlePlay}
            handleClearDirections={handleClearDirections}
            handleEatGrass={handleEatGrass}
          />
        </div>
        <div className="directions">
          <Directions directionsArray={directionsArray} />
        </div>
      </div>
      <div className="game-board">
        <Field cowIndex={cowIndex} eatGrass={eatGrass} />
        <Player cowDirection={cowDirection} cowIndex={cowIndex} />
      </div>
    </div>
  );
}

export default App;
