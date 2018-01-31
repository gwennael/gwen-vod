import React, { Component } from 'react';
import FilmList from './FilmList'

// Rendu de la page d'accueil de l'application
class Home extends Component {
    render () {
        return (
            <div>
                <FilmList/>
            </div>
        );
    }
}

export default Home;
