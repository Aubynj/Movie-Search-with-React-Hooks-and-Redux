import { FETCH_UPCOMING_MOVIES, INIT_FETCH } from '../Actions/index'

const initialState = {
    loadingF : true,
    upcomingMovies : [],
    tvShows : []
}

const fetchReducer = (state= initialState, action) => {
    switch(action.type) {
        case INIT_FETCH:
                return {
                    ...state,
                    loadingF : true
                }
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                loadingF : false,
                upcomingMovies : action.payload
            }
        default:
            return state
    }
}

export default fetchReducer