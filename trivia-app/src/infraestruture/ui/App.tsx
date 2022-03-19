import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomeScreen, QuizScreen, ResultsScreen } from './screens'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz/:id" element={<QuizScreen />} />
        <Route path="/quiz/results" element={<ResultsScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
