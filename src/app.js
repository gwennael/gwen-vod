import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux';
import thunk from 'redux-thunk';

import App from './components/App';
import { getFilms } from './redux/films/actions';

// Importation du HTML principal
import './index.html';

// Variable globale de l'application
export const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

// Récupération des films populaires
store.dispatch(getFilms(1));

// Récupération du container de l'application principale
const container = document.getElementById('gwenVOD');

// Rendu d'App dans "container"
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    container
);

// Rechargement du "hot module"
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App/>
            </AppContainer>
            ,container
        );
    });
}
