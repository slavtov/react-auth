import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [thunk, logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
