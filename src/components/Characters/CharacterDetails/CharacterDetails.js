import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getCharacterDetails, AddLastSeen } from '../../../redux/actions/index'
import CharacterDetailsView from './CharacterDetailsView'
// import axios from 'axios'

const CharacterDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    // const data = async () => {
    //   const json = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //   dispatch(getCharacterDetails(json.data))
    // }
    // data()
    dispatch(getCharacterDetails(id))
    dispatch(AddLastSeen(id))
  }, [dispatch, id])

  return (
    <>
      <CharacterDetailsView />
    </>
  )
}

export default CharacterDetails
