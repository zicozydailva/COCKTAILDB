import React, { createContext, useEffect, useContext, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [cocktails, setCocktails] = useState([])
  const [searchTerm, setSearchTerm] = useState("a")

  const getCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        let newCocktails = drinks.map(item => {
          let { idDrink, strDrink, strDrinkThumb, strGlass, strCategory, strInstructions } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            category: strCategory,
            instruction: strInstructions
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={
      {
        loading, cocktails, setSearchTerm
      }
    }>
      {children}
    </AppContext.Provider>
  )
}
const useGlobalcontext = () => {
  return useContext(AppContext);
}
export { AppProvider, AppContext, useGlobalcontext };
