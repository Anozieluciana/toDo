import React from 'react'
import './App.css'
import Hero from './Comp/Hero/Hero'
import Inbox from './Comp/DashBoard/Inbox'


 const App = () => {
  return (
    <div className='MainContainer'>
        <Hero/>
        <Inbox/>
    </div>
  )
}

export default App