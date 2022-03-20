/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrivia } from '../../../contexts/TriviaContext'

import { Button, Layout } from '../../components'

import DOMPurify from 'dompurify'

import styles from './styles.module.scss'

interface CardProps {
  key: number
  isCorrect: boolean
  description: string
}

const AnswareCard: React.FC<CardProps> = ({ isCorrect, description, key }) => {
  return (
    <article className={isCorrect ? styles.correct : styles.wrong} key={key}>
      <p className={styles.icon}>{isCorrect ? '+' : '-'}</p>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description)
        }}
      />
    </article>
  )
}

const ResultsScreen: React.FC = () => {
  const { userAnswares, trivia, resetUserAnswares } = useTrivia()

  const navigate = useNavigate()

  useEffect(() => {
    userAnswares.length < trivia.length && navigate('/')
  }, [])

  const handlePlayAgain = () => {
    resetUserAnswares()
    navigate('/')
  }

  return (
    <Layout
      title={`You scored <br/>${
        userAnswares.filter(({ isCorrect }) => isCorrect).length
      } out of ${trivia.length}`}
      actionButton={<Button onClick={handlePlayAgain}>PLAY AGAIN?</Button>}
    >
      <section className={styles.section}>
        {userAnswares
          .sort((a, b) => a.triviaPosition - b.triviaPosition)
          .map(({ triviaPosition, description, isCorrect }) => (
            <AnswareCard
              key={triviaPosition}
              description={description}
              isCorrect={isCorrect}
            />
          ))}
      </section>
    </Layout>
  )
}

export default ResultsScreen
