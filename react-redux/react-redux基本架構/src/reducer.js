import { combineReducers } from 'redux' //可將reducer合併的middleware
import { GET, GET_ALL, POST_MAIN, POST_CHILD, LOGIN_CHECK, LOGIN, LOGOUT, REGISTER, REGISTERED, MODIFY, DELETE } from './actionTypes'

//reducer作用為當處理完action時，將返回的資料做處理並改變狀態。
const initialState = {
	userData: null,
	
}
//根據不同action及返回值改變不同狀態
function GetReducer(state = initialState, action){
	switch (action.type){
		case `${STR}_PENDING`:{
			return Object.assign({}, state, {
				userData: null,
			})
		}
		case `${STR}_FULFILLED` : {
			const response = action.payload.data
			return Object.assign({}, state, {
				userData: null,
			})
		}
		case `${STR}_REJECTED` : {
			return Object.assign({}, state, {
				userData: null,
			})
		default:
			return state
	}
}


//將不同reducer合併
const app = combineReducers({
	actionName: GetReducer,
})

export default app