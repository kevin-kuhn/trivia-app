import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useTrivia } from '../../../contexts/TriviaContext'
import { Layout, Button } from '../../components'

import Dompurify from 'dompurify'

import styles from './styles.module.scss'

const QuizScreen: React.FC = () => {
  const { position } = useParams()
  const { getTriviaByPosition, doAnswer } = useTrivia()

  const navigate = useNavigate()

  const currentTrivia = useMemo(
    () => getTriviaByPosition(Number(position)),
    [position]
  )

  const handleNavigate = (currentPosition: number) => {
    const isLastPage = currentPosition === 9

    navigate(isLastPage ? '/quiz/results' : `/quiz/${currentPosition + 1}`)
  }

  const handleAnswer = (answer: string) => {
    const currentPosition = Number(position)

    doAnswer(currentPosition, answer)

    handleNavigate(currentPosition)
  }

  if (!currentTrivia) {
    return (
      <Layout title="Trivia not exists! (404)">
        <Button onClick={() => navigate('/')}>Return to home page.</Button>
      </Layout>
    )
  }

  return (
    <Layout
      title={currentTrivia.category}
      actionButton={
        <>
          <Button onClick={() => handleAnswer('TRUE')}>TRUE</Button>
          <Button onClick={() => handleAnswer('FALSE')}>FALSE</Button>
        </>
      }
    >
      <section className={styles.section}>
        <div className={styles.box}>
          <p
            className={styles.p}
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(currentTrivia.question)
            }}
          />
        </div>
        <p className={styles.counter}>{Number(position) + 1} of 10</p>
      </section>
    </Layout>
  )
}

export default QuizScreen
