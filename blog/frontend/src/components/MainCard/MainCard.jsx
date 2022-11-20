import React from 'react'
import './MainCard.css'


const MainCard = (props) => {
  return (
    <div class="card">
        <img className="card-img-top style-main-img" src={props.src} alt={props.author} />
        <div className="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p>{props.author}</p>
          <p className="card-text">{props.text}</p>
          <p class="card-text">
            <small class="text-muted">{props.date}</small>
          </p>
        </div>
      </div>
  )
}

export default MainCard