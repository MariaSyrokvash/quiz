import React, {FC} from 'react';
import style from './RandomBird.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import defaultImage from './../../assets/image/birdAnswer.jpg';
import {BirdType} from '../../App';
import './RandomBirdAudio.css';

type RandomBirdType = {
	correctAnswer: BirdType | null
	clickedButtonCorrect: boolean
}

export const RandomBird: FC<RandomBirdType> = ({correctAnswer, clickedButtonCorrect}) => {
	return (
		<div className={style.box}>
			<div className={style.imageBox}>
				<img src={correctAnswer ? (clickedButtonCorrect ? correctAnswer.image :  defaultImage) : ''} className={style.image}/>
			</div>
			<div className={style.imageBox}>
				<p className={style.name}>{clickedButtonCorrect ? correctAnswer&& correctAnswer.name: '*****'}</p>
				{/*<audio src={correctAnswer ? correctAnswer.audio: ''} controls={true}></audio>*/}
				<AudioPlayer  showDownloadProgress showFilledProgress autoPlay src={correctAnswer ? correctAnswer.audio: ''} ></AudioPlayer>
			</div>
		</div>
	)
}