import React from 'react'
import UseState from './components/UseState'
import UseStateRegister from './components/UseStateRegister'
import UseEffect from './components/UseEffect'
import ChildUseContext from './components/ChildUseContext'
import UseReducer from './components/UseReducer'





function App() {
  return (
    <>
    <div className="container"><UseState /></div>
    <div className="container"><UseStateRegister /></div>
    <div className="container"><UseEffect /></div>
    <div className="container"><ChildUseContext /></div>
    <div className="container"><UseReducer /></div>
    </>
  )
}

export default App