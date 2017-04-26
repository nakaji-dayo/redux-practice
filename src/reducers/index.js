/* @flow */
import type { Action } from '../actions'

const home = (state: Object = {count: 0}, action: Action) => {
  switch (action.type) {
    case "COUNT_UP":
      return {
        ...state,
        count: state.count + action.value
      }
    case "COUNT_DOWN":
      return {
        ...state,
        count: state.count - action.value
      }
    default:
      return state
  }
}

export { home }
