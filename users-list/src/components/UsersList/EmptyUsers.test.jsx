/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import EmptyUsers from './EmptyUsers';

describe('EmptyUsers', () => {
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
  test('should render EmptyUsers', () => {
    act(() => {
      render(
        <EmptyUsers />,
        container,
      );
    });
    expect(<EmptyUsers />).toBeDefined();
  });
});
