import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import 'normalize.css';
import './index.css';
import theme from './config/theme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const customTheme = createMuiTheme(theme);
const generateClassName = createGenerateClassName();
const target = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <JssProvider generateClassName={generateClassName}>
      <App />
    </JssProvider>
  </MuiThemeProvider>,
  target
);
registerServiceWorker();

