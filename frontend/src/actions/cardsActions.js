import axios from 'axios';
import { SET_CARDS, SET_SEARCH, SET_CURRENT_CARD } from './actionTypes';

// Load Cards
export const loadCards = () => async (dispatch) => {
	try {
		const res = await axios.get('/'); //what page will this cards be on?
		console.log('LOAD CARDS SUCCESS', res);
		dispatch({
			type: SET_CARDS,
			payload: res.data,
		});
	} catch (err) {
		console.log('error', err);
	}
};

export const setSeatch = (searchTerm) => {
	return {
		type: SET_SEARCH,
		payload: searchTerm,
	};
};

export const setCurrentTask = (cardId) => {
	return {
		type: SET_CURRENT_CARD,
		payload: cardId,
	};
};
