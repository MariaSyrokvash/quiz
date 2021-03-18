import React, {FC} from 'react';
import s from './Statistics.module.css'

type StatisticsPropsType = {
	score: number
	resetSettings: () => void
}


export const Statistics: FC<StatisticsPropsType> = ({score, resetSettings}) => {

	const onClickHandler = () => resetSettings()

	return (
		<div className={s.statisticsBox}>
			<h2 className={s.title}>Ваш счет: {score}.</h2>
			<span className={s.subTitle}>Максимальный счет 30 баллов.</span>
			<button onClick={onClickHandler} className={s.btn}>Начать заново?</button>
		</div>
	)
}