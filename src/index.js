import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'
import Router from './router'
// import App from './App';


render(
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  ,
  document.getElementById('root')
);

