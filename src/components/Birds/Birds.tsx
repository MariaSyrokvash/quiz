import React, {AudioHTMLAttributes, createRef, DetailedHTMLProps, FC, RefObject, useEffect, useState} from 'react';
import style from './Birds.module.css'
import {BirdType} from '../../App';

type BirdsPropsType = {
	currentSetBirds: Array<BirdType>
	correctAnswer: BirdType | null
	setClickedBird: (bird: BirdType) => void
	setDisabledNextLevel: (value: boolean) => void
	clickedButtonCorrect: boolean
	setClickedButtonCorrect: (value: boolean) => void
	nexLevel: boolean
	attempt: number
	setAttempt: (value: number) => void
	currentIndex: number
	setFinishGame: (value: boolean) => void
}

export const Birds: FC<BirdsPropsType> = ({
																						currentSetBirds,
																						correctAnswer,
																						setClickedBird,
																						setDisabledNextLevel,
																						clickedButtonCorrect,
																						setClickedButtonCorrect,
																						nexLevel,
																						setAttempt,
																						attempt,
																						currentIndex,
																						setFinishGame
																					}) => {

	const [audioCorrect] = useState(new Audio('https://bigsoundbank.com/UPLOAD/mp3/0028.mp3'));
	const [audioWrong] = useState(new Audio('https://bigsoundbank.com/UPLOAD/mp3/0128.mp3'));


	useEffect(() => {
		Array.from(document.getElementsByClassName(style.errorAnswer)).forEach((element) =>element.className = style.name
		)
	}, [nexLevel])

	const onClickHandler = (id: number, event: any) => {
		setClickedBird(currentSetBirds[id])
		if (clickedButtonCorrect) return
		setAttempt(attempt + 1)

		if (correctAnswer && correctAnswer.id === id) {
			audioCorrect.play()
			setClickedButtonCorrect(true)
			setDisabledNextLevel(false)

			return false
		}

		if (event.target.id !== id) {
			audioWrong.play()
			event.target.className = style.errorAnswer
			return false
		}
	}


	return (
		<div className={style.box}>
			<ul className={style.list}>
				{
					currentSetBirds.map(bird => {
						return <button key={bird.id}
													 className={`${style.name} ${bird.id === (correctAnswer && correctAnswer.id) && clickedButtonCorrect ? style.correctAnswer : ''}`}
													 onClick={(event) => onClickHandler(bird.id, event)}
													 id={String(bird.id)}>
							{bird.name}
						</button>
					})
				}
			</ul>
		</div>
	)
}