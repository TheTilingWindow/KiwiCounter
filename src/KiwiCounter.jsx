import { useState } from "react";
function KiwiCounter() {
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function handleClick() {
        setKiwiCounter((prev) => prev + 1)
    }

    return(
        <>
          <h1>Kiwi Counter 🥝</h1>
          <p>There are {kiwiCounter} kiwis</p>
          <button onClick={handleClick}>Click me!</button>
        </>
    )
}

export default KiwiCounter