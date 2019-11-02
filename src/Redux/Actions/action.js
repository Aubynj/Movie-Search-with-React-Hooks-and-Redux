import axios from 'axios'
import { FETCH_UPCOMING_MOVIES, FETCH_SEARCH_SUCCESS, INIT_SEARCH, FETCH_SEARCH_FAILURE} from './index'

// Place your API_KEY here | Below is a fake key
const API_KEY = "f99440dca1ba7da268636d1b51c7f4e4"

export const fetchUpcomingMusic = () => (dispatch) => {
    dispatch(initSearch())
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`)
    .then(res => dispatch({ type: FETCH_UPCOMING_MOVIES, payload: res.data}))
    .catch(err => console.log(err))
}

export const makeMovieSearch = data => dispatch => {
    dispatch(initSearch())
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${data}`)
    .then(response => dispatch({ type: FETCH_SEARCH_SUCCESS, payload: response.data}))
    .catch(err => dispatch({ type: FETCH_SEARCH_FAILURE, payload: 'Ooops...There is a problem fetching result'}))
} 

export const fetchTvPopularShows = () => dispatch =>{
    dispatch(initSearch())
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const initSearch = () => {
    return {
        type : INIT_SEARCH
    }
}