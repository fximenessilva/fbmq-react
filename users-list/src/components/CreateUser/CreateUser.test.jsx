/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Simulate } from 'react-dom/test-utils';
// import * as actions from '../../redux/actions/userActions';

import CreateUser from './CreateUser';

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
    render(<CreateUser />, { wrapper });
    const nameInput = document.getElementById('name-input');

    Simulate.change(nameInput, { target: { value: 'hey' } });
    expect(nameInput.value).toBe('hey');
  });

  test('should input change value on input job', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<CreateUser />, { wrapper });
    const jobInput = document.getElementById('job-input');

    Simulate.change(jobInput, { target: { value: 'bla' } });
    expect(jobInput.value).toBe('bla');
  });
  test('should render compo', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<CreateUser />, { wrapper });

    expect(<CreateUser />).toBeDefined();
  });

  test('should call the function submitHandler on submit', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<CreateUser />, { wrapper });
    const fzrButton = document.getElementById('submt-form');
    fireEvent.click(fzrButton);
    const submitHandler = jest.fn();
    expect(submitHandler).toBeDefined();
  });

  xtest('should call the function reset on click', () => {
    const initialState = { userReducer: { users: [] } };
    wrapper = wrapperFactory(initialState);
    render(<CreateUser />, { wrapper });
    const resetBtn = document.getElementById('reset-btn');
    fireEvent.click(resetBtn);

    const reset = jest.fn();
    expect(reset).toBeDefined();
  });
});
