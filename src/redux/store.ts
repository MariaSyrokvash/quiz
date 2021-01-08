import {applyMiddleware, combineReducers, createStore} from 'redux';
import {birdsDataReducer} from './data-birds-reducer';
import {scoreReducer} from './score-reducer';
import {appReducer} from './appReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
	birds: birdsDataReducer,
	score: scoreReducer,
	app: appReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store.getState()