import React from 'react'
import UseState from './components/UseState'
import UseStateRegister from './components/UseStateRegister'
import UseEffect from './components/UseEffect'
import ChildUseContext from './components/ChildUseContext'



function App() {
  return (
    <>
    <div className="container"><UseState /></div>
    <div className="container"><UseStateRegister /></div>
    <div className="container"><UseEffect /></div>
    <div className="container"><ChildUseContext /></div>
    </>
  )
}

export default App