import React from 'react'

// import styles from "./Controls.module.css";

function Controls(props) {
  return (
    <div>
      <button onClick={props.handleForward}>forward</button>
      <br />
      <button onClick={props.handleBackward}>backward</button>
      <br />
      <button onClick={props.handleTurnLeft}>turn left</button>
      <br />
      <button onClick={props.handleTurnRight}>turn right</button>
      <br />
      <button onClick={props.handleEatGrass}>eat grass</button>
      <br />
      <button onClick={props.handleReset}>reset</button>
      <br />
      <button onClick={props.handlePlay}>play</button>
      <br />
      <button onClick={props.handleClearDirections}>clear directions</button>
    </div>
  );
}

export default Controls
