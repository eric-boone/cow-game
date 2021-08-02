import fieldCords from "./fieldCords";

const cowFacing = ["N", "E", "S", "W"];

const nextInstruction = (setCowDirectionsIndex) => {
  setCowDirectionsIndex((cowDirectionsIndex) => cowDirectionsIndex + 1);
};

// format (direction the cow is facing)(tell the cow what to do)
// (n)(tl) = ntl = north turn left
// n = north
// e = east
// s = south
// w = west
// f = forward
// b = backward
// tr = turn right
// tl = turn left

export const nf = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].y === 0 || fieldCords[cowIndex].y === undefined) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex - 10;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const nb = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].y === 9) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex + 10;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const ntr = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[1];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const ntl = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[3];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const ef = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].x === 9) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex + 1;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const eb = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].x === 0) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex - 1;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const etr = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[2];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const etl = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[0];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const sf = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].y === 9) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex + 10;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const sb = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].y === 0 || fieldCords[cowIndex].y === undefined) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex - 10;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const str = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[3];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const stl = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[1];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const wf = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].x === 0 || fieldCords[cowIndex].x === undefined) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex - 1;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const wb = (cowIndex, setCowIndex, setCowDirectionsIndex) => {
  if (fieldCords[cowIndex].x === 9) {
    nextInstruction(setCowDirectionsIndex);
  } else {
    let newCowPosition = cowIndex + 1;
    setCowIndex(newCowPosition);
    nextInstruction(setCowDirectionsIndex);
  }
};

export const wtr = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[0];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};

export const wtl = (setCowDirection, setCowDirectionsIndex) => {
  let newDirection = cowFacing[2];
  setCowDirection(newDirection);
  nextInstruction(setCowDirectionsIndex);
};
