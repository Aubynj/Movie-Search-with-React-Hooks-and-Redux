import axios from 'axios'
import { FETCH_UPCOMING_MOVIES, FETCH_POPULAR_TV_SHOW_SUCCESS, FETCH_POPULAR_TV_SHOW_FAILURE, INIT_FETCH_P, INIT_FETCH, FETCH_SEARCH_SUCCESS, INIT_SEARCH, FETCH_SEARCH_FAILURE} from './index'
import { FETCH_UPCOMING_MOVIES_FAILURE } from './types'

// Place your API_KEY here | Below is a fake key
const API_KEY = "f99440dca1ba7da268636d1b51c7fsdfhkjh"
const URL = "https://api.themoviedb.org/3/"
export const imageURL = "https://image.tmdb.org/t/p/w500/"

export const fetchUpcomingMusic = () => (dispatch) => {
    dispatch(initFetch())
    axios.get(`${URL}movie/upcoming?api_key=${API_KEY}&language=en-US`)
    .then(res => {
        dispatch({ type: FETCH_UPCOMING_MOVIES, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_UPCOMING_MOVIES_FAILURE, payload: 'Ooops...There is a problem fetching result'})
    })
}

export const makeMovieSearch = data => dispatch => {
    dispatch(initSearch())
    axios.get(`${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${data}`)
    .then(response => {
        if (response.data.results.length > 1){ 
            dispatch({ type: FETCH_SEARCH_SUCCESS, payload: response.data}) 
        }else {
            dispatch({ type: FETCH_SEARCH_FAILURE, payload: 'Ooops...Search didn\'t return good results'})
        } 
    })
    .catch(err => dispatch({ type: FETCH_SEARCH_FAILURE, payload: 'Ooops...There is a problem fetching result'}))
} 

export const fetchTvPopularShows = () => dispatch =>{
    dispatch(initFetchP())
    axios.get(`${URL}tv/popular?api_key=${API_KEY}&language=en-US`)
    .then(res => {
        dispatch({ type: FETCH_POPULAR_TV_SHOW_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FETCH_POPULAR_TV_SHOW_FAILURE, payload: 'Ooops...There is a problem fetching result'})
    })
}

export const initSearch = () => {
    return {
        type : INIT_SEARCH
    }
}

export const initFetch = () => {
    return {
        type : INIT_FETCH
    }
}

export const initFetchP = () => ({
    type : INIT_FETCH_P
})