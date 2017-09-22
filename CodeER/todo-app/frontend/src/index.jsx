import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

//Usado para criar a Store
import { createStore } from 'redux';

//Usado para passar a store para toda arvore do React
import { Provider } from 'react-redux';

//Esqueleto para criar todo o esquema da minha Store
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
                && window.__REDUX_DEVTOOLS_EXTENSION__()

//Criando a store
const store = createStore(reducers, devTools);
//Conectando minha store com React
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))