import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktails] = useState("a")
  const { id } = useParams()

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const { strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = { name, image, info, category, glass, ingredients, instructions }
          setCocktails(newCocktail)
        } else {
          setCocktails(null)
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h1 className="section__center">No Cocktail to display</h1>
  } else {
    const { name, image, category, info, glass, instructions, ingredients } = cocktail
    return (
      <section className="single__cocktail">
        <div className="single__center">
          <Link to="/" className="hyperLink btn">Back Home </Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img className="img-single" src={image} alt={name} />
            <div className="info">
              <strong>
              Ingredients:
                </strong> 
              {
                ingredients.map(item => {
                  return item ? <li>{item}</li> : null
                })
              }

              <h4>Instructions: {instructions}</h4>
              <p>Type of Glass: {glass}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
