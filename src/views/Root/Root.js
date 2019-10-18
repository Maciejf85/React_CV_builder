import React from 'react';
import Main from 'views/Main';
import Edit from 'views/Edit';
import Preview from 'views/Preview';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/mainTheme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import path from '../../path';

library.add(fas);

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <Route path={path.main} exact component={Main} />
            <Route path={path.edit} exact component={Edit} />
            <Route path={path.preview} exact component={Preview} />
          </>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default Root;

//  TODO: import poszczególnych ikon zamiast całej biblioteki fontAwsome;
