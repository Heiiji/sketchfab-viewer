import React from 'react';
import ReactDOM from 'react-dom';
import { Router as BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './type.d';
import './index.css';
import history from './_helpers/history';
import { mainTheme } from './_helpers/themes';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ThemeProvider theme={mainTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
