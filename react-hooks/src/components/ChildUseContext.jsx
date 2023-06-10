import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UseContext'

const ChildUseContext = () => {
    const userData = useContext(AppContext)
    console.log(userData)
  return (
    <div className='container' style={{marginTop:50}}>
        <h2>useContext Hook: use data from parents wothout sending as props</h2>
        <div className="container text-center"><h3>Name: {userData.name} Age: {userData.age}</h3> </div>
    </div>
  )
}

export default ChildUseContext