import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'
import Router from './router'

render(
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  ,
  document.getElementById('root')
);

