/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestUsersSuccess(users) {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    users,
  };
}

function requestUsersFail(error) {
  return {
    type: actionTypes.GET_USERS_ERROR,
    error,
  };
}

export function requestUsers(page) {
  return async (dispatch) => {
    const endpoint = `https://reqres.in/api/users?page=${page}`;
    try {
      dispatch({ type: actionTypes.GET_USERS_REQUEST });
      const { data } = await axios.get(endpoint);
      dispatch(requestUsersSuccess(data));
    } catch (error) {
      dispatch(requestUsersFail(error));
    }
  };
}
