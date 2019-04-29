import ToggleViewActions from '../../src/Components/ToggleView/ToggleView.act'

describe('ToogleView actions type testing', () => {
  it('should create an action with correct type', () => {
    expect(ToggleViewActions.toggleView().type).toEqual('TOGGLE_VIEW')
  })
})
