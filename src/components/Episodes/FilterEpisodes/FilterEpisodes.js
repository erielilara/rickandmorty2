import React from 'react'
import { useDispatch } from 'react-redux'
import { getEpisodesBySeason } from '../../../redux/actions'
import FilterEpisodesView from './FilterEpisodesView'

const FilterEpisodes = () => {
  const dispatch = useDispatch()

  const handlerFilterSeason = (e) => {
    dispatch(getEpisodesBySeason(e.target.value))
  }

  return (
    <div>
      <FilterEpisodesView
        handlerFilterSeason={handlerFilterSeason}
      />
    </div>
  )
}

export default FilterEpisodes
