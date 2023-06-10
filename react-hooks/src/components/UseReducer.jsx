import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer'

const initialValue = 0;
const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialValue)
    return (

        <>
            <h2>UseReducer Hook: <br /></h2>
            <div className="container d-flex flex-row justify-content-evenly">
                <button className="btn btn-danger" onClick={() => dispatch({ type: "DEC" })}><h1>-</h1></button>
                <h1>{count}</h1>
                <button className="btn btn-success" onClick={() => dispatch({ type: "INC" })}><h1>+</h1></button>
            </div>
        </>
    )
}

export default UseReducer