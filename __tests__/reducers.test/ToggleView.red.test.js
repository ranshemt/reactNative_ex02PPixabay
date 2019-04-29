import TOGGLE_VIEW from '../../src/Components/ToggleView/ToggleView.act.types'
import ToggleViewReducers from '../../src/Components/ToggleView/ToggleView.red'

describe('ToggleView Reducer', () => {
  it('should return the initial state', () => {
    expect(ToggleViewReducers(undefined, {})).toEqual({
      mode: 'grid'
    })
  })

  it('should handle TOGGLE_VIEW', () => {
    expect(
      ToggleViewReducers(
        {},
        {
          type: TOGGLE_VIEW,
          payload: { mode: 'grid' }
        }
      )
    ).toEqual({ mode: 'list' })
    expect(
      ToggleViewReducers(
        {},
        {
          type: TOGGLE_VIEW,
          payload: { mode: 'list' }
        }
      )
    ).toEqual({ mode: 'grid' })
  })
})
