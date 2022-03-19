import React from 'react'
import ReactDOM from 'react-dom'
import App from './infraestruture/ui/App'

import { BrowserRouter } from 'react-router-dom'

import { TriviaProvider } from './infraestruture/contexts/TriviaContext'
import { ErrorProvider } from './infraestruture/contexts/ErrorContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TriviaProvider>
        <ErrorProvider>
          <App />
        </ErrorProvider>
      </TriviaProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
