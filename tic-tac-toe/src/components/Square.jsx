import React from 'react';

function Square({value, onclick}) {
  return (
    <button className='box' onClick={onclick}>{value}</button>
  );
}

export default Square;