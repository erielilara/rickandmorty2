import axios from 'axios'

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_LOCATIONS = 'GET_LOCATIONS'
export const GET_EPISODES = 'GET_EPISODES'
export const FILTER_GENRE = 'FILTER_GENRE'
export const GET_GENDER = 'GET_GENDER'
export const GET_DETAIL = 'GET_DETAIL'
export const LAST_SEEN = 'LAST_SEEN'
export const GET_EPISODES_SEASON = 'GET_EPISODES_SEASON'
export const GET_LOCATIONS_TYPE = 'GET_LOCATIONS_TYPE'

export const getCharacters = () => {
  return async function (dispatch) {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_CHARACTERS, payload: response.data.results })
  }
}

export const getCharacterByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_CHARACTERS, payload: response.data.results })
  }
}

export const getCharacterbyGender = (gender) => {
  return async function (dispatch) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_CHARACTERS, payload: response.data.results })
  }
}

export const getCharacterbyStatus = (status) => {
  return async function (dispatch) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?status=${status}`)
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_CHARACTERS, payload: response.data.results })
  }
}
export const getCharacterDetails = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return dispatch({ type: GET_DETAIL, payload: response.data })
  }
}

export const getLocations = () => {
  return async function (dispatch) {
    const response = await axios.get('https://rickandmortyapi.com/api/location')
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_LOCATIONS, payload: response.data.results })
  }
}
export const getEpisodes = () => {
  return async function (dispatch) {
    const response = await axios.get('https://rickandmortyapi.com/api/episode')
    let next = response.data.info.next

    while (response.data.results.length < response.data.info.count) {
      const urlNext = await axios.get(next)
      next = response.data.info.next
      const charge = urlNext.data.results
      response.data.results = [...response.data.results, ...charge]
      next = urlNext.data.info.next
    }
    return dispatch({ type: GET_EPISODES, payload: response.data.results })
  }
}

export const AddLastSeen = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return dispatch({ type: LAST_SEEN, payload: response.data })
  }
}

export const getEpisodesBySeason = (payload) => {
  return { type: GET_EPISODES_SEASON, payload }
}

export const getLocationsByType = (type) => {
  return { type: GET_LOCATIONS_TYPE, payload: type }
}
