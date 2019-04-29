import {
  ON_CHANGE,
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from '../../src/Components/SearchBar/SearchBar.act.types'
import SearchBarReducer from '../../src/Components/SearchBar/SearchBar.red'

describe('ToggleView Reducer', () => {
  it('should return the initial state', () => {
    expect(SearchBarReducer(undefined, {})).toEqual({
      query: '',
      loading: false,
      error: null,
      amountCurrQuery: -1,
      results: []
    })
  })

  it('should handle ON_CHANGE', () => {
    expect(
      SearchBarReducer(
        {},
        {
          type: ON_CHANGE,
          payload: { query: 'someQuery' }
        }
      )
    ).toEqual({
      query: 'someQuery',
      amountCurrQuery: -1
    })
  })

  it('should handle FETCH_IMAGES_BEGIN', () => {
    expect(SearchBarReducer({}, { type: FETCH_IMAGES_BEGIN })).toEqual({
      loading: true,
      error: null
    })
  })

  it('should handle FETCH_IMAGES_FAILURE', () => {
    expect(
      SearchBarReducer(
        {},
        {
          type: FETCH_IMAGES_FAILURE,
          payload: { error: 'someError' }
        }
      )
    ).toEqual({
      loading: false,
      error: 'someError',
      amountCurrQuery: -1,
      results: []
    })
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    expect(
      SearchBarReducer(
        {},
        {
          type: FETCH_IMAGES_SUCCESS,
          payload: {
            results: [
              {
                largeImageURL:
                  'https://pixabay.com/get/eb33b80921f0063ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_1280.jpg',
                webformatHeight: 640,
                webformatWidth: 640,
                likes: 1857,
                imageWidth: 2276,
                id: 2696947,
                user_id: 1982503,
                views: 676180,
                comments: 213,
                pageURL: 'https://pixabay.com/photos/girl-face-colorful-colors-artistic-2696947/',
                imageHeight: 2276,
                webformatURL:
                  'https://pixabay.com/get/eb33b80921f0063ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_640.jpg',
                type: 'photo',
                previewHeight: 150,
                tags: 'girl, face, colorful',
                downloads: 474358,
                user: 'ivanovgood',
                favorites: 1783,
                imageSize: 3548285,
                previewWidth: 150,
                userImageURL: 'https://cdn.pixabay.com/user/2017/11/29/19-47-26-843_250x250.jpg',
                previewURL: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_150.jpg'
              },
              {
                largeImageURL:
                  'https://pixabay.com/get/e836b30f20f5013ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_1280.jpg',
                webformatHeight: 381,
                webformatWidth: 640,
                likes: 1169,
                imageWidth: 4769,
                id: 1320810,
                user_id: 2312503,
                views: 332867,
                comments: 98,
                pageURL: 'https://pixabay.com/photos/woman-blond-portrait-girl-color-1320810/',
                imageHeight: 2846,
                webformatURL:
                  'https://pixabay.com/get/e836b30f20f5013ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_640.jpg',
                type: 'photo',
                previewHeight: 89,
                tags: 'woman, blond, portrait',
                downloads: 97516,
                user: 'melancholiaphotography',
                favorites: 1218,
                imageSize: 1492080,
                previewWidth: 150,
                userImageURL: 'https://cdn.pixabay.com/user/2016/04/14/23-29-05-812_250x250.jpg',
                previewURL: 'https://cdn.pixabay.com/photo/2016/04/10/21/34/woman-1320810_150.jpg'
              }
            ]
          }
        }
      )
    ).toEqual({
      loading: false,
      amountCurrQuery: 2,
      results: [
        {
          largeImageURL:
            'https://pixabay.com/get/eb33b80921f0063ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_1280.jpg',
          likes: 1857,
          width: 2276,
          id: 2696947,
          views: 676180,
          height: 2276,
          tags: 'girl, face, colorful',
          previewURL: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_150.jpg'
        },
        {
          largeImageURL:
            'https://pixabay.com/get/e836b30f20f5013ed1584d05fb1d4794e171e3d31db00c4090f5c77ca3e9b1bcdd_1280.jpg',
          likes: 1169,
          width: 4769,
          id: 1320810,
          views: 332867,
          height: 2846,
          tags: 'woman, blond, portrait',
          previewURL: 'https://cdn.pixabay.com/photo/2016/04/10/21/34/woman-1320810_150.jpg'
        }
      ]
    })
  })
})
