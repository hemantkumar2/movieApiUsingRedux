import { SEARCH_MOVIE, FETCH_MOVIES } from './types'
import axios from 'axios'
import { APIKey } from '../APIKey'

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  })
}

export const fetchMovies = text => dispatch => {
  axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(res => dispatch({
      type: FETCH_MOVIES,
      payload: res.data.Search
    }))
    .catch(err => console.log(err))
}