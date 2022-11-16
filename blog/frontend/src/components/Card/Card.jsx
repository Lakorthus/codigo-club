import React from 'react'

const Card = () => {
  return (
    <div className='card' id='card'>
        <span id='card__author'>Author</span>
        <span id='card__date'></span>
        <img id='card__img'alt='card'/>
        <h1 id='card__title'>Title Card</h1>
        <p id='card__text'>Card text</p>
        </div>
  )
}

export default Card