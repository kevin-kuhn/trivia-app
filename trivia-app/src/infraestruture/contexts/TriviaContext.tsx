import { createContext, useState, useContext } from 'react'
import { Trivia } from '../../domain/entities/Trivia'

interface Answare {
  triviaId: number
  isCorrect: boolean
  description: string
}

interface ContextProps {
  trivia: Trivia[]
  userAnswares: Answare[]
  isAllAnswered: boolean
  doAnswer: (triviaId: number, response: string) => void
  updateTrivia: (trivia: Trivia[]) => void
}

const TriviaContext = createContext({} as ContextProps)

// eslint-disable-next-line react/prop-types
export const TriviaProvider: React.FC = ({ children }) => {
  const [trivia, setTrivia] = useState<Trivia[]>([])
  const [userAnswares, setUserAnswares] = useState<Answare[]>([])

  const isAllAnswered =
    !!userAnswares.length && userAnswares.length === trivia.length

  const doAnswer = (triviaId: number, response: string) => {
    const triviaAnswered = trivia.find(t => t.getId() === triviaId)

    if (!triviaAnswered) {
      return
    }

    const isCorrect = triviaAnswered.getCorrectAnswer() === response

    setUserAnswares(userAnswares => [
      ...userAnswares.filter(
        answare => answare.triviaId !== triviaAnswered.getId()
      ),
      {
        triviaId,
        isCorrect,
        description: triviaAnswered.getQuestion()
      }
    ])
  }

  const updateTrivia = (trivia: Trivia[]) => {
    setTrivia(trivia)
  }

  return (
    <TriviaContext.Provider
      value={{
        trivia,
        userAnswares,
        isAllAnswered,
        doAnswer,
        updateTrivia
      }}
    >
      {children}
    </TriviaContext.Provider>
  )
}

export const useTrivia = () => useContext(TriviaContext)

export default TriviaContext
