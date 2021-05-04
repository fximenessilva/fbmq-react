/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// import * as actions from '../../redux/actions/userActions';

import UsersList from './UsersList';

jest.mock('../../redux/actions/userActions');

const buildStore = configureStore([thunk]);

describe('List compo testing', () => {
  let wrapper;

  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };
  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should render material back button', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<UsersList />, { wrapper });
    const beforePageBtn = document.getElementById('beforePageBtn');

    fireEvent.click(beforePageBtn);

    expect(beforePageBtn).toHaveTextContent('navigate_before');
  });

  test('should render material next button', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<UsersList />, { wrapper });
    const nextPageBtn = document.getElementById('nextPageBtn');

    fireEvent.click(nextPageBtn);

    expect(nextPageBtn).toHaveTextContent('navigate_next');
  });

  xtest('should map usersList', () => {
    const initialState = {
      userReducer: {
        usersList: {
          loading: true,
          users: {
            data: [
              {
                id: 0, avatar: 'sd', email: 'few', first_name: 'gfea', last_name: 'sa',
              },
              {
                id: 1, avatar: 'sfd', email: 'fasdew', first_name: 'gfsdea', last_name: 'adsa',
              },
            ],
          },
        },
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<UsersList />, { wrapper });
    const userNameId = document.getElementById('userNameId');

    expect(userNameId.textContent).toBe('gfea sa');
  });
});
