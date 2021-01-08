import React from 'react';
import style from './RandomBird.module.css';
import {BirdType} from '../../redux/data-birds-reducer';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';
import birdDefault from './../../assets/image/birdAnswer.jpg';

type RandomBirdType = {
	randomCorrectRandomBird: BirdType
}

export const RandomBird = (props: RandomBirdType) => {
	const isCorrectAnswer = useSelector<AppRootState, boolean>(state => state.app.isCorrect)
	const bird = props.randomCorrectRandomBird;

	console.log(bird)

	return (
		<div className={style.box}>
			<div className={style.imageBox}>
				<img src={isCorrectAnswer ? bird.image : birdDefault} className={style.image}/>
			</div>
			<div className={style.imageBox}>
				<p className={style.name}>{isCorrectAnswer ? bird.name : '*****'}</p>
				<audio src={bird.audio} controls={true}></audio>
			</div>
		</div>
	)
}