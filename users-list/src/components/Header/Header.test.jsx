/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test('should render Header', () => {
    act(() => {
      render(<Router>
        <Header />
      </Router>, container);
    });
    expect(<Header />).toBeDefined();
  });
});
