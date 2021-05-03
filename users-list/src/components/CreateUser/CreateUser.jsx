/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/actions/userActions';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  // const userList = useSelector((state) => state.userReducer);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(name, job));
  };
  return (
    <div>
      <h3>Create your user</h3>

      <form action="submit" onSubmit={submitHandler}>
        <input
          placeholder="Type your name..."
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Type your job..."
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
};

export default CreateUser;
