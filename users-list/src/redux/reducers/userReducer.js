/* eslint-disable import/prefer-default-export */
import actionTypes from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return { ...state, loading: true, users: [] };

    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.users };

    case actionTypes.GET_USERS_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export { userReducer };
