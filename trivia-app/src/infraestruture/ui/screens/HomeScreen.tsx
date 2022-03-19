import React, { useEffect } from "react"
import { TriviaService } from "../../services/TriviaService"

const HomeScreen: React.FC = () => {
	const service = new TriviaService()

	useEffect(() => {
		const get = async () => {
			const result = await service.getTrivia()
			console.log(result)
		}
		get()
	}, [])

	return (
		<div>
			<h1>Home</h1>
		</div>
	)
}

export default HomeScreen
