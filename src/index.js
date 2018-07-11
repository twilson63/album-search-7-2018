/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import Component from '@reactions/component'
import App from './app'

ReactDOM.render(
  <Component initialState={{ items: [] }}>{App}</Component>,
  document.getElementById('app')
)
