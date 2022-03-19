import React from 'react'
import ReactDOM from 'react-dom'
import App from './infraestruture/ui/App'

import { TriviaProvider } from './infraestruture/contexts/TriviaContext'
import { ErrorProvider } from './infraestruture/contexts/ErrorContext'

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <ErrorProvider>
        <App />
      </ErrorProvider>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
