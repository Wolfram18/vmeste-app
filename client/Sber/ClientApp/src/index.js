import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00afb9',
            light: '#666ad1',
            dark: '#0081a7',
        },
        secondary: {
            main: '#0081a7', 
            light: '#666ad1',
            dark: '#00afb9',
        },
    }
});

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiThemeProvider>
    </BrowserRouter>,
    rootElement);

registerServiceWorker();

