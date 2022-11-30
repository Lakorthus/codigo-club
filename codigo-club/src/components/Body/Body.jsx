import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Main from './Main/Main'

function Body({ children }) {
  return (
    <div className="">
        <Navbar />
        <Header />
        <Main />
    </div>
  )
}

export default Body