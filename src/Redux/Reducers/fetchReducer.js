import { FETCH_UPCOMING_MOVIES, FETCH_UPCOMING_MOVIES_FAILURE, INIT_FETCH } from '../Actions/index'

const initialState = {
    loadingF : true,
    upcomingMovies : [],
    error : null
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
                upcomingMovies : action.payload,
                error : null
            }
        case FETCH_UPCOMING_MOVIES_FAILURE:
            return {
                ...state,
                loadingF : false,
                upcomingMovies : [],
                error : action.payload
            }
        default:
            return state
    }
}

export default fetchReducer