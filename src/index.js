import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { Reset } from 'styled-reset'
import GlobalStyle from './globalStyles'

ReactDOM.render(
  <>
    <Reset />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
