import React from 'react'
import { useGlobalcontext } from '../Context'


const SearchForm = () => {
  const searchValue = React.useRef("")
  const {setSearchTerm} = useGlobalcontext()

  const handleChange = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <form>
      <input className="searchField"
        type="text"
        id="name"
        onChange={handleChange}
        ref={searchValue}
        placeholder="Search Cocktails" />
    </form>
  )
}

export default SearchForm
