import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Router from './containers/Router'
import http from '@404space/http'
import httpConfig from './config/http'
import * as serviceWorker from './serviceWorker'

function httpResponseSuccessHandler(data: any) {
  if (data.success) {
    return data && data.data
  } else {
    return data
  }
}

http.register(httpConfig)
http.interceptors.result.use(httpResponseSuccessHandler)

ReactDOM.render(<Router />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
