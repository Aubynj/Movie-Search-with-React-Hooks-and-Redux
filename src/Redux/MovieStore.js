import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middleware = [thunk]
const rootReducer

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store