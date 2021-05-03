/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { userReducer } from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the state without action', () => {
    const result = userReducer(undefined, {});
    expect(result).toEqual({});
  });

  test('should add get users request to the state', () => {
    const loadSearchAction = {
      type: actionTypes.GET_USERS_REQUEST,
      loading: true,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: true, users: [] });
  });

  test('should add get users error to the state', () => {
    const loadSearchAction = {
      type: actionTypes.GET_USERS_ERROR,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, error: undefined });
  });

  test('should add get users success to the state', () => {
    const loadSearchAction = {
      type: actionTypes.GET_USERS_SUCCESS,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, users: undefined });
  });

  test('should add create user request to the state', () => {
    const loadSearchAction = {
      type: actionTypes.CREATE_USER_REQUEST,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: true, user: {} });
  });

  test('should add create user error to the state', () => {
    const loadSearchAction = {
      type: actionTypes.CREATE_USER_ERROR,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, error: undefined });
  });

  test('should add create user success to the state', () => {
    const loadSearchAction = {
      type: actionTypes.CREATE_USER_SUCCESS,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, users: undefined });
  });

  test('should add delete user request to the state', () => {
    const loadSearchAction = {
      type: actionTypes.DELETE_USER_REQUEST,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);

    expect(result).toEqual({ loading: true });
  });

  test('should add delete user error to the state', () => {
    const loadSearchAction = {
      type: actionTypes.DELETE_USER_ERROR,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);

    expect(result).toEqual({ loading: false, error: undefined });
  });

  test('should add delete user success to the state', () => {
    const loadSearchAction = {
      type: actionTypes.DELETE_USER_SUCCESS,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);

    expect(result).toEqual({ loading: false, user: undefined });
  });

  test('should add reset create user to the state', () => {
    const loadSearchAction = {
      type: actionTypes.RESET_CREATE_USER,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, user: {} });
  });

  test('should add reset delete user to the state', () => {
    const loadSearchAction = {
      type: actionTypes.RESET_DELETE_USER,
      loading: false,

    };
    const result = userReducer(initialState, loadSearchAction);
    expect(result).toEqual({ loading: false, user: { id: 0 } });
  });
});
