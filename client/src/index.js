import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import store from './store';
import GlobalStyle from './components/global.css';


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));