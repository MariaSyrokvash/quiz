import React, {useEffect, useState} from 'react'
import './App.css';
import {Header} from './components/Header/Header';
import {RandomBird} from './components/RandomBird/RandomBird';
import {Birds} from './components/Birds/Birds';
import {LevelBtn} from './components/LevelBtn/LevelBtn';
import {AnswerBird} from './components/Answer/Answer';
import {ProgressBar} from './components/ProgressBar/ProgressBar';
import {BrowserRouter} from 'react-router-dom';
import {birds} from './redux/birds';
import {randomInteger} from './utils/random';
import {Statistics} from './components/Statistics/Statistics';

export type BirdType = {
	id: number
	name: string
	species: string
	description: string
	image: string
	audio: string
}

function App() {
	const [random, setRandomNumber] = useState(randomInteger(0, 5))
	const [score, setScore] = useState<number>(0)
	const [attempt, setAttempt] = useState<number>(0)
	const [currentIndex, setCurrentIndex] = useState<0 | 1 | 2 | 3 | 4 | 5 | number>(0)
	const [currentSetBirds, setCurrentSetBirds] = useState<Array<BirdType>>(birds[currentIndex])
	const [correctAnswer, setCorrectAnswer] = useState<BirdType | null>(currentSetBirds[random])
	const [clickedBird, setClickedBird] = useState<BirdType | null>(null)
	const [disabledNextLevel, setDisabledNextLevel] = useState<boolean>(true)
	const [clickedButtonCorrect, setClickedButtonCorrect] = useState<boolean>(false)
	const [nexLevel, setNexLevel] = useState<boolean>(false)
	const [finishGame, setFinishGame] = useState<boolean>(false)

	const resetSettings = () => {
		setFinishGame(false)
		setClickedButtonCorrect(false)
		setClickedBird(null)
		setRandomNumber(randomInteger(0, 5))
		setCurrentIndex(0)
		setAttempt(0)
		setScore(0)
	}

	useEffect(() => {
		setAttempt(0)
		setCorrectAnswer(currentSetBirds[random])
	}, [currentIndex, random, nexLevel, finishGame])


	useEffect(() => {
		const randomNumber = randomInteger(0, 5)
		if (nexLevel) {
			setRandomNumber(randomNumber)
			setCurrentSetBirds(birds[currentIndex])
			setClickedBird(null)

			setNexLevel(false)
		}

	}, [nexLevel])


	const changeLevel = () => {
		if(currentIndex === 5) {
			setCorrectAnswer(null)
			setFinishGame(true)
			return false
		}
		setNexLevel(true)
		setCurrentIndex(currentIndex + 1)
		setDisabledNextLevel(true)
		setCorrectAnswer(null)
		setClickedButtonCorrect(false)
		if (attempt === 1) {
			setScore(() => score + 5)
		} else if (attempt > 1) {
			setScore(() => score + (5 - attempt))
		}
	}

	return (
		<div className="App">
			<BrowserRouter>

				{
					finishGame ?
						<Statistics score={score} resetSettings={resetSettings} />
						:
						<>
							<Header score={score}/>
							<ProgressBar currentIndex={currentIndex}/>
							<RandomBird correctAnswer={correctAnswer} clickedButtonCorrect={clickedButtonCorrect}/>
							<div className='wrapper'>
								<Birds currentSetBirds={currentSetBirds} correctAnswer={correctAnswer} setClickedBird={setClickedBird}
											 setDisabledNextLevel={setDisabledNextLevel}
											 clickedButtonCorrect={clickedButtonCorrect}
											 setClickedButtonCorrect={setClickedButtonCorrect}
											 nexLevel={nexLevel}
											 setAttempt={setAttempt}
											 attempt={attempt}
											 currentIndex={currentIndex}
											 setFinishGame={setFinishGame}
								/>
								<AnswerBird correctAnswer={correctAnswer} currentSetBirds={currentSetBirds} clickedBird={clickedBird}/>
							</div>
							<LevelBtn changeLevel={changeLevel} disabledNextLevel={disabledNextLevel}/>
						</>
				}

			</BrowserRouter>
		</div>
	);
}

export default App;
