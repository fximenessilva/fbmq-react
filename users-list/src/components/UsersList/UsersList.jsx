/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../../redux/actions/userActions';
import EmptyUsers from './EmptyUsers';

import './styles/UsersList.css';

const UsersList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userReducer);

  const { users } = userList;

  function setMin() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function setMax() {
    if (users?.data?.length) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    dispatch(requestUsers(page));
  }, [dispatch, page]);
  return (

    <div className="usersList-wrapper">
      <h2>Users</h2>
      {users?.data?.length ? (users?.data.map((user) => (
        <li key={user.id}>
          <div key={user.id} className="userCard">
            <div className="avatar-wrapper">
              <img src={user.avatar} alt="" />
            </div>
            <div className="user-details">
              <span id="userNameId" className="user-name">
                {user.first_name}
                {' '}
                {user.last_name}
              </span>
              <span className="user-email">
                {user.email}
              </span>
            </div>

          </div>
        </li>
      ))) : <EmptyUsers />}
      <div className="navigation-btn-wrapper">
        <span role="button" id="beforePageBtn" onClick={() => setMin()} className="material-icons">
          navigate_before
        </span>
        <p>
          Page
          {' '}
          {page}
        </p>
        <span role="button" id="nextPageBtn" onClick={() => setMax()} type="button" className="material-icons">
          navigate_next
        </span>
      </div>
    </div>
  );
};

export default UsersList;
