import {  FETCH_POPULAR_TV_SHOW_SUCCESS, FETCH_POPULAR_TV_SHOW_FAILURE, INIT_FETCH_P } from '../Actions/index'

const initialState = {
    loadingT : true,
    tvShows : [],
    error : null
}

const tvShowReducer = (state= initialState, action) => {
    switch(action.type) {
        case INIT_FETCH_P:
                return {
                    ...state,
                    loadingT : true
                }
        case FETCH_POPULAR_TV_SHOW_SUCCESS:
            return {
                ...state,
                loadingT : false,
                tvShows : action.payload,
                error : null
            }
        case FETCH_POPULAR_TV_SHOW_FAILURE:
            return {
                ...state,
                loadingT : false,
                tvShows : [],
                error : action.payload
            }
        default:
            return state
    }
}

export default tvShowReducer