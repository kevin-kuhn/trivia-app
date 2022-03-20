import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

import { useError } from '../../../contexts/ErrorContext'
import { useTrivia } from '../../../contexts/TriviaContext'

import { Layout, Button } from '../../components'

import styles from './styles.module.scss'

const HomeScreen: React.FC = () => {
  const { updateTrivia } = useTrivia()
  const { error } = useError()

	const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleBegin = async () => {
    setIsLoading(true)

    await updateTrivia()

    setIsLoading(false)

		!error.hasError && navigate('/quiz/0')
  }

  return (
    <Layout
      error={error}
      title="Welcome to the Trivia Challenge!"
      actionButton={
        <Button onClick={handleBegin} isLoading={isLoading}>
          BEGIN
        </Button>
      }
    >
      <section className={styles.textWrapper}>
        <p className={styles.p}>
          You will be presented with 10 True or False questions.
        </p>
        <p className={styles.p}>Can you score 100%?</p>
      </section>
    </Layout>
  )
}

export default HomeScreen
