/* eslint-disable no-unused-vars */
import axios from 'axios';
import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import actionTypes from './actionTypes';

import {
  requestUsers, createUser, deleteUser, resetCreateUser, resetDeleteUser,
} from './userActions';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('users actions', () => {
    let fakeData;
    let fakeError;
    let store;
    let dispatch = null;

    beforeEach(() => {
      store = mockStore();
      fakeData = { user: 'pepe' };
      fakeError = 'error';
      dispatch = jest.fn();
    });
    afterEach(() => {
      jest.resetAllMocks();
      dispatch.mockClear();
    });

    test('request users from api', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 1 }));

      await requestUsers()(dispatch);

      const expectedValue = {
        type: 'GET_USERS_SUCCESS',
        users: 1,
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on request users', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(requestUsers());
      expect(store.getActions()[1].type).toBe(actionTypes.GET_USERS_ERROR);
    });

    xtest('create user on api', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 1 }));

      await createUser()(dispatch);

      const expectedValue = {
        type: 'CREATE_USER_REQUEST',
        user: {},
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on create user on api', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(createUser());
      expect(store.getActions()[1].type).toBe(actionTypes.CREATE_USER_ERROR);
    });

    test('resetCreateUser should return an object with type RESET_CREATE_USER', () => {
      const expectedAction = {
        type: actionTypes.RESET_CREATE_USER,
      };

      expect(resetCreateUser()).toEqual(expectedAction);
    });

    test('resetDeleteUser should return an object with type RESET_CREATE_USER', () => {
      const expectedAction = {
        type: actionTypes.RESET_DELETE_USER,
      };

      expect(resetDeleteUser()).toEqual(expectedAction);
    });

    test('delete user from api', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 1 }));

      await deleteUser()(dispatch);

      const expectedValue = {
        type: 'DELETE_USER_REQUEST',

      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on delete user', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(deleteUser());
      expect(store.getActions()[1].type).toBe(actionTypes.DELETE_USER_ERROR);
    });
  });
});
