import React from 'react';
import Main from '../Main';
import GlobalStyle from 'theme/GlobalStyle'
// import { createStore } from 'redux'

function Root() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello React</h1>
      <Main />
    </>
  );
}

export default Root;