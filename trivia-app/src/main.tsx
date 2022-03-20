import React from 'react'
import ReactDOM from 'react-dom'
import App from './infraestruture/ui/App'

import { BrowserRouter } from 'react-router-dom'

import { TriviaProvider } from './infraestruture/contexts/TriviaContext'
import { ErrorProvider } from './infraestruture/contexts/ErrorContext'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <TriviaProvider>
          <App />
        </TriviaProvider>
      </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
