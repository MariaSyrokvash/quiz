import React, {FC} from 'react';
import style from './Answer.module.css'
import defaultImage from './../../assets/image/birdAnswer.jpg';
import {BirdType} from '../../App';
import AudioPlayer from 'react-h5-audio-player';

type AnswerBirdType = {
	correctAnswer: BirdType | null
	currentSetBirds: Array<BirdType>
	clickedBird: BirdType | null
}

export const AnswerBird: FC<AnswerBirdType> = ({correctAnswer, currentSetBirds, clickedBird}) => {


	return (
		<div className={style.box}>
			{
				clickedBird ?
					<>
						<div className={style.wrapperBird}>
							<div className={style.innerBird}>
								<div>
									<img src={clickedBird ? clickedBird.image : defaultImage} className={style.image}/>
								</div>
								<div className={style.nameBox}>
									<p className={style.name}>{clickedBird && clickedBird.name}</p>
									<p className={style.species}>{clickedBird && clickedBird.species}</p>
								</div>
							</div>
							<div>
								<AudioPlayer autoPlayAfterSrcChange={false} autoPlay={false} src={clickedBird ? clickedBird.audio : '****'} className={style.audio}></AudioPlayer>
							</div>
							<div className={style.description}>{clickedBird && clickedBird.description}</div>
						</div>
					</>
					:
					<>
						<div className={style.default}>
							<p>Послушайте плеер.</p>
							<p>Выберите птицу из списка</p>
						</div>
					</>
			}


		</div>
	)
}