import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseRef = () => {
    const [userInput, setUserInput] = useState("")
    const count = useRef(0)
    const inputRef = useRef()


    useEffect(() => {
        count.current = count.current + 1
    })

    const changeBorder = () =>{
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "red"
    }
    return (
        <>
        <div className='container'>
            <h2>useRef Hook : </h2>
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" name='userName' value={userInput} onChange={(e) => setUserInput(e.target.value)} id="exampleInputName" />
            <h3>Component Rendered {count.current} times </h3>
        </div>

        <div className="container">
            <input type="text" ref = {inputRef} />
            <button type="submit" className="btn btn-success" onClick={changeBorder}>Submit</button>
        </div>
        </>
    )
}

export default UseRef