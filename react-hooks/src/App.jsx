import React from 'react'
import UseState from './components/UseState'
import UseStateRegister from './components/UseStateRegister'
import UseEffect from './components/UseEffect'

function App() {
  return (
    <>
    <div className="container"><UseState /></div>
    <div className="container"><UseStateRegister /></div>
    <div className="container"><UseEffect /></div>
    </>
  )
}

export default App