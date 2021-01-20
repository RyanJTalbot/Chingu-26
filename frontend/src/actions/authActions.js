import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	DELETE_USER,
	EDIT_USER_SUCCESS,
	EDIT_USER_FAIL,
	RESET_ERROR,
	SET_ERROR,
} from './types';
import setAuthToken from './../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	const config = {
		headers: {
			authorization: `Bearer ${localStorage.token && localStorage.token}`,
		},
	};

	if (localStorage.token) {
		try {
			const res = await axios.get('/account/, config');
			console.log('LOAD USER SUCCESS', res);
			dispatch({
				type: USER_LOADED,
				PAYLOAD: res.data,
			});
		} catch (err) {
			console.log('LOAD USER FAIL', err.response);
			dispatch({
				type: AUTH_ERROR,
			});
		}
	}
};

export const resetError = () => (dispatch) => {
	dispatch({ type: RESET_ERROR });
};
