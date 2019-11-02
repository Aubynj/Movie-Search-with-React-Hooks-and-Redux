import { FETCH_SEARCH_SUCCESS, INIT_SEARCH, FETCH_SEARCH_FAILURE } from '../Actions/index'


const initialState = {
    loadingS : true,
    searchResult : [],
    errMsg : ''
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT_SEARCH:
            return {
                ...state,
                loadingS : true
            }
        case FETCH_SEARCH_SUCCESS: 
            return {
                ...state,
                loadingS : false,
                searchResult : action.payload,
                errMsg : ''
            }
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                loadingS : false,
                searchResult : [],
                errMsg : action.payload
            }
        default:
            return state
    }
}

export default searchReducer