/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { createUser, resetCreateUser } from '../../redux/actions/userActions';
import './styles/CreateUser.css';

const CreateUser = ({ history }) => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  const userReducer = useSelector((state) => state.userReducer);

  const { user, loading } = userReducer;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(name, job));
  };

  const reset = () => {
    dispatch(resetCreateUser());
    history.push('/');
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
                {user?.name}
                {' '}
                successfully
              </p>
              <span className="material-icons">
                done
              </span>
            </span>
            <Link to="/">
              <button
                onClick={reset}
                className="backHome-btn"
                type="button"
              >
                Back
              </button>
            </Link>
          </span>
        </>
      ) : loading ? (
        <div style={{
          display: 'flex', margin: '300px', justifyContent: 'center',
        }}
        >
          <BounceLoader color="#3379b7" size={50} />
        </div>
      ) : (
        <>
          <div className="createUser-wrapper">
            <h2>Create your user</h2>

            <form action="submit" onSubmit={submitHandler}>
              <input
                required
                placeholder="Type your name..."
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                required
                placeholder="Type your job..."
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
              <div>
                <p>Please note that creating a user could take a few seconds</p>
                <p>When the user is created, you will get a warning</p>
              </div>
              <button type="submit">Create user</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default CreateUser;
