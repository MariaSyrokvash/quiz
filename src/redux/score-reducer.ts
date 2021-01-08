type InitialStateType = {
	score: number
}

const initialState: InitialStateType = {
	score: 0
}


export const scoreReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		default:
			return state
	}
}


type ActionsType = any