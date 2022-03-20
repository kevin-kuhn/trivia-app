import { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { TriviaService } from '../services/TriviaService'
import { useError } from './ErrorContext'

interface Answare {
  triviaPosition: number
  isCorrect: boolean
  description: string
}

interface ITrivia {
  entityId: number
  category: string
  type: string
  correctAnswer: string
  difficulty: string
  incorrectAnswers: string[]
  question: string
}

interface ContextProps {
  trivia: ITrivia[]
  userAnswares: Answare[]
  isAllAnswered: boolean
	resetUserAnswares: () => void
  doAnswer: (position: number, response: string) => void
  getTriviaByPosition: (position: number) => ITrivia | null
  updateTrivia: () => void
}

const TriviaContext = createContext({} as ContextProps)

// eslint-disable-next-line react/prop-types
export const TriviaProvider: React.FC = ({ children }) => {
  const { setCurrentError } = useError()

  const [trivia, setTrivia] = useLocalStorage<ITrivia[]>('trivia', [])
  const [userAnswares, setUserAnswares] = useLocalStorage<Answare[]>(
    'userAnswares',
    []
  )

  const isAllAnswered =
    !!userAnswares.length && userAnswares.length === trivia.length

  const doAnswer = (position: number, response: string) => {
    const triviaAnswered = trivia[position]

    if (!triviaAnswered || !response) {
      return
    }

    const isCorrect =
      triviaAnswered.correctAnswer?.toLowerCase() === response?.toLowerCase()

    setUserAnswares([
      ...userAnswares.filter(t => t.triviaPosition !== position),
      {
        triviaPosition: position,
        isCorrect,
        description: triviaAnswered.question
      }
    ])
  }

	const resetUserAnswares = () => {
		setUserAnswares([])
	}

  const updateTrivia = async () => {
    const service = new TriviaService()
    const result = await service.getTrivia()

    if (result.hasError) {
      setCurrentError({
        hasError: true,
        message: result.errorMessage ?? 'An error has ocurred, please try again'
      })
      return
    }

    setTrivia(
      result.data.map(t => ({
        entityId: t.getId(),
        category: t.getCategory(),
        type: t.getType(),
        correctAnswer: t.getCorrectAnswer(),
        difficulty: t.getDifficulty(),
        incorrectAnswers: t.getIncorrectAnswers(),
        question: t.getQuestion()
			}))
    )
    setCurrentError({
      hasError: false,
      message: ''
    })
  }

  const getTriviaByPosition = (position: number) => {
    return trivia[position] ?? null
  }

  return (
    <TriviaContext.Provider
      value={{
        trivia,
        userAnswares,
        isAllAnswered,
        getTriviaByPosition,
				resetUserAnswares,
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
