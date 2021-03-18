import React, {FC} from 'react';
import { Score } from '../Score/Score';
import style from './Header.module.css';
import logo from './../../assets/image/logo.svg';


type HeaderPropsType = {
	score: number
}

export const Header:FC<HeaderPropsType> = ({score}) => {
	return (
		<div className={style.box}>
			<header className={style.header}>
				<img src={logo} className={style.logo}/>
			</header>
			<Score score={score}/>
		</div>
	)
}