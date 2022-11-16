import React from 'react'

const Card = () => {
  return (
    <div className='card' id='card'>
        <span id='card-author'>Author</span>
        <span id='card-date'></span>
        <img id='card--img'alt='card'/>
        <h1 id='card--title'>Title Card</h1>
        <p id='card-text'>Card text</p>
        </div>
  )
}

export default Card