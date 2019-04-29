import {
  ON_CHANGE,
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from './SearchBar.act.types'
const initialState = {
  query: '',
  loading: false,
  error: null,
  amountCurrQuery: -1,
  results: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        amountCurrQuery: -1,
        query: action.payload.query
      }
    case FETCH_IMAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        amountCurrQuery: action.payload.results.length,
        results: action.payload.results.map(item => ({
          id: item.id,
          views: item.views,
          likes: item.likes,
          tags: item.tags.slice(),
          previewURL: item.previewURL,
          largeImageURL: item.largeImageURL,
          width: item.imageWidth,
          height: item.imageHeight
        }))
      }
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        amountCurrQuery: -1,
        results: []
      }
    default:
      return state
  }
}
