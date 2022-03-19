import { Routes, Route } from "react-router-dom"
import { HomeScreen, QuizScreen, ResultsScreen } from "./screens"

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/quiz/:id' element={<QuizScreen />} />
			<Route path='/quiz/results' element={<ResultsScreen />} />
		</Routes>
	)
}

export default App
