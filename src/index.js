import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();
const generateClassName = createGenerateClassName();
const target = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <JssProvider generateClassName={generateClassName}>
      <App />
    </JssProvider>
  </MuiThemeProvider>,
  target
);
registerServiceWorker();

