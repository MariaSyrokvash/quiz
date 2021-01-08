import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './ProgressBar.module.css'
import {useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';

export const ProgressBar = () => {
	const activePage = useSelector<AppRootState, string>(state => state.app.activePage)

	return (
		<div className={style.box}>
			<NavLink to='' activeClassName={activePage === 'Разминка' ? style.active : ''} className={style.link}>Разминка</NavLink>
			<NavLink to='' activeClassName={activePage === 'Воробьиные' ? style.active : ''}  className={style.link}>Воробьиные </NavLink>
			<NavLink to='' activeClassName={activePage === 'Лесные птицы' ? style.active : ''} className={style.link}>Лесные птицы </NavLink>
			<NavLink to='' activeClassName={activePage === 'Певчие птицы' ? style.active : ''} className={style.link}>Певчие птицы </NavLink>
			<NavLink to='' activeClassName={activePage === 'Хищные птицы' ? style.active : ''} className={style.link}>Хищные птицы </NavLink>
			<NavLink to='' activeClassName={activePage === 'Морские птицы' ? style.active : ''} className={style.link}>Морские птицы </NavLink>
		</div>
	)
}