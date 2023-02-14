import React, { useState } from 'react';

function Color() {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Click Me');

    const bgChange = () =>{
        let newBg = "#34495e";
        setBg(newBg);
        setName('OUCH! 🐺');
    };
    const bgBack = () => {
        setBg(purple);
        setName('Ayyo! 😠')
    }


  return (
    <>
        <div style={{ backgroundColor: bg }}>
            {/* <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button> */}
            <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
        </div>
    </>
  )
}

export default Color;