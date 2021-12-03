import React from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterbyGender, getCharacterbyStatus } from '../../../redux/actions/index'
import CharacterFilterView from './CharacterFilterView'

const CharactersFilter = () => {
  const dispatch = useDispatch()

  const handlerFilterGenre = (e) => {
    e.preventDefault()
    dispatch(getCharacterbyGender(e.target.value))
  }

  const handlerFilterStatus = (e) => {
    e.preventDefault()
    dispatch(getCharacterbyStatus(e.target.value))
  }
  return (
    <div>
      <CharacterFilterView
        handlerFilterGenre={handlerFilterGenre}
        handlerFilterStatus={handlerFilterStatus}
      />
    </div>
  )
}

export default CharactersFilter
