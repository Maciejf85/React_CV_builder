import React from 'react';
import NavBar from 'components/organisms/Navigation/NavBar';
import axios from 'axios';
import path from '../path';

const Edit = () => {
  axios
    .post(`${path.cors}login.php`, {
      text: 'fialek85@gmail.com',
      password: '123',
    })
    .then(response => console.log('response', response))
    .catch(error => {
      console.log('error :', error);
    });

  return (
    <>
      <NavBar />
      <h1>Edit component</h1>
    </>
  );
};

export default Edit;
