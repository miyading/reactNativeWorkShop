import {Provider} from 'react-redux'
import React, {Component} from 'react'
import store from './store'
import App from './App'

export default class setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}