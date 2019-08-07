//actions負責根據不同的actionTypes對應到不同的Api

import * as actionTypes from './actionTypes'
import axios from 'axios'


var rand = function() {
    return Math.random().toString(36).substr(2); // 將隨機數轉36進位的字串，並跳過0
	};

var token = function() {
    return rand() + rand(); // to make it longer
};

var xsrftoken = token()

document.cookie = `XSRF-TOKEN=${token()}` //設定cookie

//axios instance，將withCredentials設定為true使得Request Header可以帶上cookie
const instance = axios.create({
	baseURL: 'http://localhost/backendApi/index.php',
	withCredentials: true,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN'
})

//action creater
export const STR = (STR) =>({
	type: actionTypes.STRactionType,
	payload: instance.post('' , {
		str: STR
	})
})