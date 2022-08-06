// import { click } from '@testing-library/user-event/dist/click'
// import React, { useState } from 'react'


function CellPhone({handleColorChange}) {
  // this was added as trail to test color change on a button /cellphone
  // it changes the color of Navbar text

  return (
    <>
      <button onClick={() => handleColorChange("orange")} style={{color:'orange'}}>Click</button>
      <button onClick={() => handleColorChange("blue")} style={{color:'blue'}}>Click me</button>
      <button onClick={() => handleColorChange("yellow")} style={{color:'yellow'}}>No me Click</button>
    <div>CellPhone</div>
    </>
  )
}

export default CellPhone