import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'

function Body() {
  return (
    <div className="body  bg-[#19647e] h-[100vh] flex flex-col md:flex-col-reverse">
        <Main />
        <Header />
    </div>
  )
}

export default Body