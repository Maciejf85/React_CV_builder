import React from 'react';
import Main from 'views/Main';
import Edit from 'views/Edit';
import Preview from 'views/Preview';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/mainTheme';

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <Route path="/" exact component={Main} />
            <Route path="/edit" exact component={Edit} />
            <Route path="/preview" exact component={Preview} />
          </>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default Root;
