import { TOGGLE_VIEW } from './ToggleView.act.types'

const initialState = {
  mode: 'grid'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VIEW:
      return {
        ...state,
        mode: action.payload.mode === 'grid' ? 'list' : 'grid'
      }
    default:
      return state
  }
}
