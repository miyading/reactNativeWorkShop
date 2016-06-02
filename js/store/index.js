import {createStore} from 'redux'
import {nameListReducer} from '../reducers/nameListReducer'

export default createStore(nameListReducer)