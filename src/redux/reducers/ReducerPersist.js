import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './index'

const persistConfig = {
  key: 'root',
  storage,
  debug: true
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
