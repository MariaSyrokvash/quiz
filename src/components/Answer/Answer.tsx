import React from 'react';
import style from './Answer.module.css'
import {BirdType} from '../../redux/data-birds-reducer';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';

type AnswerBirdType = {
	setBirds: Array<BirdType>
}

export const AnswerBird = (props: AnswerBirdType) => {
	const setBirds = props.setBirds;
	const currentID = useSelector<AppRootState, string | null>(state => state.app.currentID)
	const isTouched = useSelector<AppRootState, boolean>(state => state.app.isTouched)
	const currentSet = setBirds[Number(currentID) - 1]

	return (
		<div className={style.box}>
			{
				isTouched
					?
					<div className={style.wrapperBird}>
						<div className={style.innerBird}>
							<div>
								<img src={currentSet.image} className={style.image}/>
							</div>
							<div className={style.nameBox}>
								<p className={style.name}>{currentSet.name}</p>
								<p className={style.species}>[{currentSet.species}]</p>
							</div>
						</div>
						<div>
							<audio controls src={currentSet.audio} className={style.audio}></audio>
						</div>
						<div className={style.description}>{currentSet.description}</div>
					</div>
					:
					<div className={style.default}>
						<p>Послушайте плеер.</p>
						<p>Выберите птицу из списка</p>
					</div>
			}


		</div>
	)
}