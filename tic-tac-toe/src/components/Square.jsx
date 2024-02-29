// import React from 'react';
import { useState } from 'react';

function Square({ value, onSquareClick }) {

  return <button className="box" onClick={onSquareClick}>{value}</button>;
}

export default Square;