import React from "react";

import styles from "./Controls.module.css";

function Controls(props) {
  return (
    <div>
      <button onClick={props.handleForward}>forward</button>
      <button onClick={props.handleBackward}>backward</button>
      <br />
      <button onClick={props.handleTurnLeft}>turn left</button>
      <button onClick={props.handleTurnRight}>turn right</button>
      <br />
      <button className={styles.playButton} onClick={props.handlePlay}>play</button>
      <br />
      <button className={styles.warning} onClick={props.handleReset}>reset</button>
      <button className={styles.warning} onClick={props.handleClearDirections}>clear directions</button>
    </div>
  );
}

export default Controls;
