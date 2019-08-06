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
          <Main />
        </>
      </ThemeProvider>
    </>
  );
}

export default Root;
