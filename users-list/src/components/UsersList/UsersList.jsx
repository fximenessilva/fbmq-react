/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUsers } from '../../redux/actions/userActions';
import './styles/UsersList.css';

const UsersList = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userReducer);

  const { users } = userList;

  useEffect(() => {
    dispatch(requestUsers(1));
  }, [dispatch]);
  return (

    <div className="usersList-wrapper">
      {users?.data && users?.data.length && users?.data.map((user) => (
        <div key={user.id} className="userCard">
          <li key={user.id}>{user.first_name}</li>
        </div>
      ))}

    </div>
  );
};

export default UsersList;
