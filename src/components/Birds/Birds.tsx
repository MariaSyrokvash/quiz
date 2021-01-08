import React, {useEffect} from 'react';
import style from './Birds.module.css'
import {BirdType} from '../../redux/data-birds-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {
	disabledBtn, isColoredAC, isNextLevelAC,
	isTouchedAC,
	setCorrectAnswer,
	setCurrentID,
	setFinishAC
} from '../../redux/appReducer';
import {AppRootState} from '../../redux/store';

type PropsType = {
	setBirds: Array<BirdType>
	randomCorrectRandomBird: BirdType
	isColored: boolean
	isNextLevel: boolean
	isFinish: boolean
}



export const Birds = (props: PropsType) => {
	const dispatch = useDispatch()
	const setBirds = props.setBirds;
	// const isFinish = useSelector<AppRootState, boolean>(state => state.app.isFinish)
	const isNextLevel = useSelector<AppRootState, boolean>(state => state.app.isNextLevel)
	const isTouched = useSelector<AppRootState, boolean>(state => state.app.isTouched)

	console.log(isTouched, 'isTouched')

	if (isNextLevel && !isTouched ) {
		dispatch(setFinishAC(false))
		dispatch(isNextLevelAC(false))
		dispatch(isColoredAC(false))
	}

	// console.log(props.isFinish, 'false')
	// console.log(props.isNextLevel, 'false')
	// console.log(props.isColored, 'false')
	//
	// console.log(!props.isFinish)
	// console.log(!props.isNextLevel)
	// console.log(!props.isColored)

	// @ts-ignore
	const validateAnswerHandler = (event: any) => {
		const value = event.target.innerHTML
		const tagLi = event.currentTarget
		console.log(props.randomCorrectRandomBird.name)

		if (!props.isFinish && !props.isNextLevel && !props.isColored) {
			tagLi.style.backgroundColor = 'red';
		}

		dispatch(setCurrentID(event.currentTarget.id))
		dispatch(isTouchedAC(true))



		if (value === props.randomCorrectRandomBird.name) {
			if (!props.isFinish && !props.isNextLevel && !props.isColored) {
				tagLi.style.backgroundColor = 'greenyellow';
			}

			dispatch(setCorrectAnswer(true))
			dispatch(disabledBtn(false))

			dispatch(setFinishAC(true))
			dispatch(isNextLevelAC(true))
			dispatch(isColoredAC(true))
		}

		return

		dispatch(setCorrectAnswer(false))
	}


	return (
		<div className={style.box}>
			<ul className={style.list}>
				{
					setBirds.map(bird => {
						return <li key={bird.id} className={style.name}  onClick={validateAnswerHandler}
											 id={String(bird.id)}>
							<p className={style.birdName}>{bird.name}</p>

						</li>
					})
				}
			</ul>
		</div>
	)
}