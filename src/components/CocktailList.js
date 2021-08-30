import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const CocktailList = ({id, image, glass, category, name}) => {
  return (
    <aside>
      <div className="cocktail__center">
        <img className="img" src={image} alt={name} />
        <div className="info">

        <h4>{name}</h4>
        <h4>Category: {category}</h4>
        <h5>Glass: {glass}</h5>
        <Link className="hyperLink btn" to={`/cocktail/${id}`}>Details</Link>
        </div>
      </div>
    </aside>
  )
}

export default CocktailList
