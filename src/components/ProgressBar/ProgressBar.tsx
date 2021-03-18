import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import style from './ProgressBar.module.css'

type ProgressBarPropsType = {
	currentIndex: number
}
export const ProgressBar: FC<ProgressBarPropsType> = ({currentIndex}) => {

	return (
		<div className={style.box}>
			<NavLink to='' activeClassName={currentIndex === 0 ? style.active : ''} className={style.link}>Разминка</NavLink>
			<NavLink to='' activeClassName={currentIndex === 1 ? style.active : ''}  className={style.link}>Воробьиные </NavLink>
			<NavLink to='' activeClassName={currentIndex === 2 ? style.active : ''} className={style.link}>Лесные птицы </NavLink>
			<NavLink to='' activeClassName={currentIndex === 3 ? style.active : ''} className={style.link}>Певчие птицы </NavLink>
			<NavLink to='' activeClassName={currentIndex === 4 ? style.active : ''} className={style.link}>Хищные птицы </NavLink>
			<NavLink to='' activeClassName={currentIndex === 5 ? style.active : ''} className={style.link}>Морские птицы </NavLink>
		</div>
	)
}