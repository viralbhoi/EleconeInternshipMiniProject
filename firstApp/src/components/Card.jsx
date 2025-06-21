import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='Card'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
