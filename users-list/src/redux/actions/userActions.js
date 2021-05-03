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

function createUserSuccess(user) {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    user,
  };
}

function createUserFail(error) {
  return {
    type: actionTypes.CREATE_USER_ERROR,
    error,
  };
}

export function createUser(name, job) {
  return async (dispatch) => {
    const endpoint = 'https://reqres.in/api/users';
    try {
      dispatch({ type: actionTypes.CREATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await axios.post(endpoint, { name, job }, config);
      dispatch(createUserSuccess(data));
    } catch (error) {
      dispatch(createUserFail(error));
    }
  };
}

export function resetCreateUser() {
  return {
    type: actionTypes.RESET_CREATE_USER,
  };
}
