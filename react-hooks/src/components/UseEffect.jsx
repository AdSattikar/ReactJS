import React, { useEffect,useState } from 'react'

const UseEffect = () => {
    const [width, setWidth] = useState(window.screen.width)
    const currentScreenWidth = () =>{
        setWidth(() => window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize',currentScreenWidth);
        return () =>{
            window.removeEventListener("resize",currentScreenWidth)
        }
    }
    )
    return (
        
      <>
      <h2>UseEffect Hook: Changes the width of window <br / ></h2>
      <div className="container bg-dark">
          <h1 className='text-center' style={{color: 'white'}}>The Size of Screen is: <span style={{color:"red"}}>{width} px</span></h1>
          
      </div>
      </>
    )
}

export default UseEffect