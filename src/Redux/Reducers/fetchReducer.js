import { FETCH_UPCOMING_MOVIES } from '../Actions/index'

const initialState = {
    upcomingMovies : [],
    tvShows : []
}

const fetchReducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies : action.payload
            }
        default:
            return state
    }
}

export default fetchReducer