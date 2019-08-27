import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from 'actions';
import NavBar from 'components/organisms/Navigation/NavBar';

const Edit = () => {
  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <h1>Edit component</h1>
      <h4>{`user name :  ${userData.name}`}</h4>
      <h4>{`user surname :  ${userData.surname}`}</h4>
      <h4>{`user age :  ${userData.age}`}</h4>
      {/* <h4>{`user surname :  ${userData.surname}`}</h4> */}
      <button type="button" onClick={() => dispatch(changeName())}>
        change name
      </button>
    </>
  );
};

export default Edit;
