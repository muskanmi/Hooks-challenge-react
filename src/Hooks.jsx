import React, { useState } from 'react'

const Hooks = () => {

    let time = new Date().toLocaleTimeString();
    // const state = useState();
    const [count, setCount] = useState(time);

    const IncNum = () => {
        // setCount(count + 1);
        time = new Date().toLocaleTimeString();
        setCount(time);
    };

    // setInterval(IncNum, 1000);   for making digital clock we can use setInterval()
  return (
    <>
        <h1> {count} </h1>
        <button onClick={IncNum}> Get Time </button>
    </>
  );
}

export default Hooks;