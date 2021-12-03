import { GET_CHARACTERS, GET_LOCATIONS, GET_EPISODES, GET_DETAIL, LAST_SEEN, GET_EPISODES_SEASON, GET_LOCATIONS_TYPE } from '../actions'

const initialState = {
  characters: [],
  locations: [],
  episodes: [],
  details: [],
  lastSeen: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload
      }
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload
      }
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload
      }
    case GET_EPISODES_SEASON:
      if (action.payload === 'All') {
        return { ...state, episodes: state.episodes }
      } else {
        const bySeason = state.episodes.filter(episode => episode.episode[2] === action.payload)
        return {
          ...state,
          episodes: bySeason
        }
      }
    case GET_LOCATIONS_TYPE:
      if (action.payload === 'All') {
        return { ...state, locations: state.locations }
      } else {
        const byType = state.locations.filter(location => location.type === action.payload)
        return {
          ...state,
          locations: byType
        }
      }
    case LAST_SEEN:
      return {
        ...state,
        lastSeen: state.lastSeen.concat(action.payload)
      }
    default:
      return state
  }
}

export default rootReducer
