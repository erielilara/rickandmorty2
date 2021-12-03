import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacters } from '../../redux/actions/index'
import HomeView from './HomeView'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])

  return (
    <div>
      <HomeView />
    </div>
  )
}

export default Home
