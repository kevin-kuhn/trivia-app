import { Routes, Route } from 'react-router-dom'
import { HomeScreen, QuizScreen, ResultsScreen } from './screens'

import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <main className={styles.containerWrapper}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz/:position" element={<QuizScreen />} />
        <Route path="/quiz/results" element={<ResultsScreen />} />
      </Routes>
    </main>
  )
}

export default App
