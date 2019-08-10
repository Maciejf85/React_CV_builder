import React from 'react';
import { useSelector } from 'react-redux'

const Edit = () => {
  const userName = useSelector(state => state.userName)
  return (
    <>
      <h1>Edit component</h1>
      <h4>{`user name :  ${userName.name}`}</h4>
      <h4>{`user surname :  ${userName.surname}`}</h4>
    </>
  );
};

export default Edit;
