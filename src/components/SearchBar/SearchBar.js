import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterByName } from '../../redux/actions'
import SearchBarView from './SearchBarView'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: ''
  })

  function handleOnChange (e) {
    e.preventDefault()
    setInput(e.target.value)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    dispatch(getCharacterByName(input))

    setInput({
      name: ''
    })
  }
  return (
    <SearchBarView
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      input={input}
    />
  )
}

export default SearchBar
