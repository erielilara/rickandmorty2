import React, { useEffect, useState } from 'react'
import CharactersView from './CharactersView'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../redux/actions/index'

const Characters = () => {
  const allCharacters = useSelector(state => state.characters)
  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage, setCharacterPerPage] = useState(30)
  const LastCharacter = currentPage * charactersPerPage
  const FirstCharacter = LastCharacter - charactersPerPage
  const characters = allCharacters.slice(FirstCharacter, LastCharacter)
  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (

    <CharactersView
      characters={characters}
      charactersPerPage={charactersPerPage}
      allCharacters={allCharacters}
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    />

  )
}

export default Characters
