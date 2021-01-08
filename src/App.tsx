import React, {useEffect, useState} from 'react'
import './App.css';
import {Header} from './components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RandomBird} from './components/RandomBird/RandomBird';
import {Birds} from './components/Birds/Birds';
import {LevelBtn} from './components/LevelBtn/LevelBtn';
import {AnswerBird} from './components/Answer/Answer';
import {AppRootState} from './redux/store';
import {BirdsStateType,} from './redux/data-birds-reducer';
import {ProgressBar} from './components/ProgressBar/ProgressBar';
import {BrowserRouter} from 'react-router-dom';
import {
	disabledBtn,
	incrementIndex,
	initializedTC, isColoredAC, isNextLevelAC,
	isTouchedAC,
	setActivePageAC,
	setCorrectAnswer, setFinishAC,
} from './redux/appReducer';
import {randomInteger} from './utils/random';

function App() {
	const pages = new Map([
		['0', 'Разминка'],
		['1', 'Воробьиные'],
		['2', 'Лесные птицы'],
		['3', 'Певчие птицы'],
		['4', 'Хищные птицы'],
		['5', 'Морские птицы']
	]);
	const isColored = useSelector<AppRootState, boolean>(state => state.app.isColored)
	const birds = useSelector<AppRootState, Array<BirdsStateType>>(state => state.birds);
	const currentIndex = useSelector<AppRootState, number>(state => state.app.currentIndex)
	const currentPage = pages.get(String(currentIndex + 1))
	const dispatch = useDispatch()
	let setBirds = birds[currentIndex];
	const isFinish = useSelector<AppRootState, boolean>(state => state.app.isFinish)
	const isNextLevel = useSelector<AppRootState, boolean>(state => state.app.isNextLevel)
	let randomCorrectRandomBird = setBirds[randomInteger(0, 5)];


	useEffect(() => {
		initializedTC(currentIndex, randomCorrectRandomBird)
	}, [currentIndex, randomCorrectRandomBird])


	const changeLevel = () => {
		dispatch(incrementIndex())
		dispatch(disabledBtn(true))
		dispatch(setCorrectAnswer(false))
		dispatch(isTouchedAC(false))
		dispatch(setActivePageAC(currentPage))
		const li = document.querySelectorAll('li')
		console.log(li)
		li.forEach(li => li.style.backgroundColor = '#222')
		// dispatch(isNextLevelAC(true))
		// dispatch(setFinishAC(true))
		// dispatch(isColoredAC(true))
	}



	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<ProgressBar/>
				<RandomBird randomCorrectRandomBird={randomCorrectRandomBird}/>
				<div className='wrapper'>
					<Birds setBirds={setBirds} randomCorrectRandomBird={randomCorrectRandomBird} isColored={isColored} isFinish={isFinish} isNextLevel={isNextLevel}/>
					<AnswerBird setBirds={setBirds}/>
				</div>
				<LevelBtn changeLevel={changeLevel} />
			</BrowserRouter>
		</div>
	);
}

export default App;
