import {FETCH_USER} from '../actions/userListAction'

export function nameListReducer(state = [], action) {
  switch(action.type) {
    case FETCH_USER:
      return [...action.payload]
    default:
      return state
  }
}