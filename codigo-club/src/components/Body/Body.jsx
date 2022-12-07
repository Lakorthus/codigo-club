import React from 'react'


function Body({children , className}) {
  return (
    <div className={`body  bg-[#19647e] min-h-[100vh] ${className}`}>
       {children}
    </div>
  )
}

export default Body