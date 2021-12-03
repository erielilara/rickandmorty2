import React, { useEffect, useState } from 'react'
import EpisodesView from './EpisodesView'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../redux/actions/index'

const Episodes = () => {
  const allEpisodes = useSelector(state => state.episodes)
  const [currentPage, setCurrentPage] = useState(1)
  const [episodesPerPage, setEspisodesPerPage] = useState(21)
  const LastEpisode = currentPage * episodesPerPage
  const FirstEpisode = LastEpisode - episodesPerPage
  const episodes = allEpisodes.slice(FirstEpisode, LastEpisode)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEpisodes())
  }, [dispatch])

  return (
    <EpisodesView
      episodesPerPage={episodesPerPage}
      episodes={episodes}
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      allEpisodes={allEpisodes}
    />
  )
}

export default Episodes
