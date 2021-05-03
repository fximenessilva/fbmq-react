/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../redux/actions/userActions';
import './styles/CreateUser.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(name, job));
  };
  return (
    <>

      {user?.name ? (
        <>
          <span className="created-success">
            <span>
              <p>
                Created user
                {' '}
                {user.name}
                {' '}
                successfully
              </p>
              <span className="material-icons">
                done
              </span>
            </span>
            <Link to="/">
              <button className="backHome-btn" type="button">Back</button>
            </Link>
          </span>
        </>
      ) : (
        <>
          <div className="createUser-wrapper">
            <h2>Create your user</h2>

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
        </>
      )}
    </>
  );
};

export default CreateUser;
