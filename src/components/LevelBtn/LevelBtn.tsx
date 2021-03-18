import React, {FC} from 'react';
import style from './LevelBtn.module.css';

type LevelBtnType = {
	changeLevel: () => void
	disabledNextLevel: boolean
}


export const LevelBtn: FC<LevelBtnType> = ({disabledNextLevel, changeLevel}) => {

	return (
		<button disabled={disabledNextLevel} onClick={changeLevel} className={style.btn}>Дальше</button>
	)
}