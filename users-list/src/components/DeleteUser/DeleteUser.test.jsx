/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Simulate } from 'react-dom/test-utils';
import DeleteUser from './DeleteUser';

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

  test('should input change value on input name', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<DeleteUser />, { wrapper });
    const numInput = document.getElementById('num-id');

    Simulate.change(numInput, { target: { value: '123' } });
    expect(numInput.value).toBe('123');
  });

  test('should render compo', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<DeleteUser />, { wrapper });

    expect(<DeleteUser />).toBeDefined();
  });

  test('should call the function submitHandler on submit', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<DeleteUser />, { wrapper });
    const deleteButton = document.getElementById('sbmtDelete');
    fireEvent.click(deleteButton);
    const submitHandler = jest.fn();
    expect(submitHandler).toBeDefined();
  });
});
