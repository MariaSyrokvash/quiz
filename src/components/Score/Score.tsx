import React, {FC} from 'react';
import style from './Score.module.css';

type ScorePropsType = {
	score: number
}

export const Score: FC<ScorePropsType> = ({score}) => {

	return (
		<div className={style.box}>
			<p>Счет: </p>
			<p className={style.score}>{score}</p>
		</div>
	)
}