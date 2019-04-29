import {
  ON_CHANGE,
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from './SearchBar.act.types'
import API_KEY from '../../../consts'

const onChange = query => ({
  type: ON_CHANGE,
  payload: { query }
})

const fetchImagesBegin = () => ({
  type: FETCH_IMAGES_BEGIN
})
const fetchImagesSuccess = results => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { results }
})
const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: { error }
})
const fetchImages = query => async dispatch => {
  dispatch(fetchImagesBegin())
  try {
    const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + query + '&image_type=photo'
    const response = await fetch(URL)
    if (!response.ok) throw new Error(`response status: ${response.status}`)
    const json = await response.json()
    dispatch(fetchImagesSuccess(json.hits))
  } catch (error) {
    dispatch(fetchImagesFailure(error))
  }
}

export default {
  onChange,
  fetchImages
}
