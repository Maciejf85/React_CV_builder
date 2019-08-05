import React from 'react';
import Main from 'views/Main';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/mainTheme';

// import { createStore } from 'redux'

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello React</h1>
          <Main />
        </>
      </ThemeProvider>
    </>
  );
}

export default Root;
