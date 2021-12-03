import React from 'react'
import { useDispatch } from 'react-redux'
import { getLocationsByType } from '../../../redux/actions'
import LocationFilterView from './LocationFilterView'

const LocationFilter = ({ allLocations }) => {
  const dispatch = useDispatch()

  const handlerFilterType = (e) => {
    e.preventDefault()
    dispatch(getLocationsByType(e.target.value))
  }

  return (
    <LocationFilterView
      handlerFilterType={handlerFilterType}
      allLocations={allLocations}
    />
  )
}

export default LocationFilter
