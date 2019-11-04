import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import searchReducer from './searchReducer'
import tvShowReducer from './tvShowReducer'

const rootReducers = combineReducers({
    fetch : fetchReducer,
    search : searchReducer,
    popular : tvShowReducer
})

export default rootReducers