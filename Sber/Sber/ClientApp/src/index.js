import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#27678d',
            light: '#666ad1',
            dark: '#001970',
        },
        secondary: {
            main: '#FF355D',
            light: '#26c6da',
            dark: '#0095a8',
        },
    }
});

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>,
    rootElement);

registerServiceWorker();

