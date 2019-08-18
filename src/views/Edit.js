import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from 'actions';
import NavBar from 'components/organisms/Navigation/NavBar';

const Edit = () => {
  const userName = useSelector(state => state.userName);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <h1>Edit component</h1>
      <h4>{`user name :  ${userName.name}`}</h4>
      <h4>{`user surname :  ${userName.surname}`}</h4>
      <h4>{`user age :  ${userName.age}`}</h4>
      {/* <h4>{`user surname :  ${userName.surname}`}</h4> */}
      <button type="button" onClick={() => dispatch(changeName())}>
        change name
      </button>
    </>
  );
};

export default Edit;
