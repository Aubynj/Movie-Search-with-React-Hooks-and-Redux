import { combineReducers } from 'redux'
import fetchReducer from './fetchReducer'
import searchReducer from './searchReducer'

const rootReducers = combineReducers({
    fetch : fetchReducer,
    search : searchReducer
})

export default rootReducers