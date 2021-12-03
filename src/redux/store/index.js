import { createStore, applyMiddleware, compose } from 'redux'
import persistedReducer from '../reducers/ReducerPersist'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

const exports = { store, persistor }
export default exports
