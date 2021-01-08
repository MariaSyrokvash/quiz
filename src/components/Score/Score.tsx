import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';
import style from './Score.module.css';

export const Score = () => {
	const score = useSelector<AppRootState, number>(state => state.score.score)

	return (
		<>
			<div className={style.box}>
				<p>Score: </p>
				<p className={style.score}>{score}</p>
			</div>
		</>
	)
}