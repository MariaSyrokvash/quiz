import React from 'react';
import { Score } from '../Score/Score';
import style from './Header.module.css';
import logo from './../../assets/image/logo.svg';

export const Header = () => {
	return (
		<div className={style.box}>
			<header className={style.header}>
				<img src={logo} className={style.logo}/>
			</header>
			<Score />
		</div>
	)
}