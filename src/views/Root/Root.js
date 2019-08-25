import React from 'react';
import Main from 'views/Main';
import Edit from 'views/Edit';
import Preview from 'views/Preview';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from 'theme/mainTheme';
import store from 'store';
import path from '../../path';

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <>
              <Route path={path.main} exact component={Main} />
              <Route path={path.edit} exact component={Edit} />
              <Route path={path.preview} exact component={Preview} />
            </>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default Root;
