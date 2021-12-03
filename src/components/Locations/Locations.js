import React, { useEffect, useState } from 'react'
import LocationsView from './LocationsView'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions'

const Locations = () => {
  const allLocations = useSelector(state => state.locations)
  const [currentPage, setCurrentPage] = useState(1)
  const [locationsPerPage, setLocationsPerPage] = useState(21)
  const LastLocation = currentPage * locationsPerPage
  const FirstLocation = LastLocation - locationsPerPage
  const locations = allLocations.slice(FirstLocation, LastLocation)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocations())
  }, [dispatch])

  return (
    <div>
      <LocationsView
        locationsPerPage={locationsPerPage}
        locations={locations}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        allLocations={allLocations}
      />
    </div>
  )
}

export default Locations
