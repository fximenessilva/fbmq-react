/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';
import { Link } from 'react-router-dom';
import { deleteUser, resetDeleteUser, requestUserById } from '../../redux/actions/userActions';
import './styles/DeleteUser.css';

const DeleteUser = ({ history }) => {
  const [id, setId] = useState('');

  const dispatch = useDispatch();

  const userReducer = useSelector((state) => state.userReducer);

  const {
    user, loading, userById,
  } = userReducer;

  useEffect(() => {
    dispatch(requestUserById(id));
  }, [dispatch, id]);

  const reset = () => {
    dispatch(resetDeleteUser());
    history.push('/');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };

  return (

    <>
      {user === '' ? (
        <>
          <span className="deleted-success">
            <span>
              <p>
                Deleted user successfully
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
        <div className="deleteUser-wrapper">
          <h2>Delete one user</h2>
          <form action="submit" onSubmit={submitHandler}>
            <input
              type="number"
              required
              placeholder="Type the user id number..."
              value={id}
              id="num-id"
              onChange={(e) => setId(e.target.value)}
            />

            {!userById?.data && (
              <p className="noUser-alert">
                There is no user with id:
                {' '}
                {id}
              </p>
            )}
            <>
              <div>
                <p>Please note that deleting a user could take a few seconds</p>
                <p>When the user is deleted, you will get a warning</p>
              </div>
              <button disabled={!userById?.data} id="sbmtDelete" type="submit">Delete user</button>
            </>

          </form>
        </div>
      )}

    </>
  );
};

export default DeleteUser;
