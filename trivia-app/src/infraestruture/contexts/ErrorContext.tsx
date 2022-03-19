import { createContext, useState, useContext } from 'react'

interface ContextProps {
  hasError: boolean
  message: string
  setError: (hasError: boolean, message: string) => void
}

const ErrorContext = createContext({} as ContextProps)

// eslint-disable-next-line react/prop-types
export const ErrorProvider: React.FC = ({ children }) => {
  const [hasError, setHasError] = useState(false)
  const [message, setMessage] = useState('')

  const setError = (hasError: boolean, message: string) => {
    setHasError(hasError)
    setMessage(message)
  }

  return (
    <ErrorContext.Provider value={{ hasError, message, setError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export const useError = () => useContext(ErrorContext)

export default ErrorContext
