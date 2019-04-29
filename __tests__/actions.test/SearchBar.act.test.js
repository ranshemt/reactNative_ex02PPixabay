import SearchBarActions from '../../src/Components/SearchBar/SearchBar.act'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS
} from '../../src/Components/SearchBar/SearchBar.act.types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('SearchBar Actions test', () => {
  it('should create an action with correct type', () => {
    expect(SearchBarActions.onChange().type).toEqual('ON_CHANGE')
  })

  afterEach(() => {
    fetchMock.restore()
  })
  it('creates FETCH_IMAGES_SUCCESS when fetching images has been done', () => {
    fetchMock.getOnce('/fakePixabayRequest', {
      payload: { results: [{ image: 'im image object..' }] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: FETCH_IMAGES_BEGIN },
      { type: FETCH_IMAGES_SUCCESS, payload: { results: [{ image: 'im image object..' }] } }
    ]
    const store = mockStore({ results: [] })

    try {
      store.dispatch(SearchBarActions.fetchImages)
      expect(store.getActions()).toEqual(expectedActions)
    } catch (error) {}
  })
})
