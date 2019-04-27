import { TOGGLE_VIEW } from './ToggleView.act.types'

const toggleView = currMode => ({
  type: TOGGLE_VIEW,
  payload: { mode: currMode }
})

export default {
  toggleView
}
