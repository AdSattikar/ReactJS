import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
  return (
    <>
    <h2>UseState Hook: <br / ></h2>
    <div className="container d-flex flex-row justify-content-evenly">
        <button className="btn btn-danger" onClick={()=> count === 0 ? setCount(0): setCount(count-1)}><h1>-</h1></button>
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={()=>setCount(count+1)}><h1>+</h1></button>
    </div>
    </>
  )
}

export default UseState