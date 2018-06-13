import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import 'normalize.css';
import './index.css';
import theme from './config/theme';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


const customTheme = createMuiTheme(theme);
const generateClassName = createGenerateClassName();
const target = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider theme={customTheme}>
    <JssProvider generateClassName={generateClassName}>
      <Provider store={store}>
        <App />
      </Provider>
    </JssProvider>
  </MuiThemeProvider>,
  target
);
registerServiceWorker();

