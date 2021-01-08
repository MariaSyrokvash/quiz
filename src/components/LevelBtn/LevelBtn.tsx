import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';
import style from './LevelBtn.module.css';

type LevelBtnType = {
	changeLevel: () => void
}


export const LevelBtn = (props: LevelBtnType) => {
	const disabledBtn = useSelector<AppRootState, boolean>(state => state.app.disabledBtn)


	return (
		<>
			<div>
				<button disabled={disabledBtn} onClick={props.changeLevel} className={style.btn}>Дальше</button>
			</div>
		</>
	)
}