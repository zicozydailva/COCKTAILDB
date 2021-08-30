import React from 'react'
import CocktailList from './CocktailList';
import { useGlobalcontext } from '../Context'
import Loading from "./Loading";


const Cocktails = () => {
  const {loading, cocktails, setSearchTerm} = useGlobalcontext();

  if(loading) {
    return <Loading />
  }
  if(Cocktails < 1) {
    return <div className="section__center">
      <h1>No Cocktails to display</h1>
    </div>
  }
  return (
    <section className="cocktails">
      {
        cocktails.map(item => {
          console.log(item);
          return <CocktailList key={item.id} {...item} />
        })
      }
    </section>
  )
}

export default Cocktails
