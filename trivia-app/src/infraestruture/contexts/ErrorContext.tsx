import { createContext, useState, useContext } from 'react'
import { GenericError } from '../../domain/types/GenericError'

interface ContextProps {
  error: GenericError
  setCurrentError: (error: GenericError) => void
}

const ErrorContext = createContext({} as ContextProps)

// eslint-disable-next-line react/prop-types
export const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<GenericError>({ hasError: false, message: '' })

  const setCurrentError = (error: GenericError) => {		
    setError(error)
  }

  return (
    <ErrorContext.Provider value={{ error, setCurrentError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export const useError = () => useContext(ErrorContext)

export default ErrorContext
