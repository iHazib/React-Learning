import { useState } from "react";


function App(){

    let [counter, setCounter] = useState(15)

    //let counter = 0;

    const addValue = () => {
        setCounter(counter+1)
    } 

    const decreaseValue = () => {
        if(counter == 0){
        
        }
        else {
            setCounter(counter-1)
        }
    }

    return(
        <>
        <h1>Counter Value: {counter}</h1>
        <button onClick={addValue}>+</button>
        <br />
        <button onClick={decreaseValue}>-</button>
        </>
    )
}

export default App
