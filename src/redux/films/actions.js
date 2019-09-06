import { API_TMDb_DISCOVER_URL } from '../../constants';

// Actions/Fonctions du reducteur pour les films

export const SET_FILMS = 'SET_FILMS';

// Obtention de la date actuelle
let date = new Date();

// Définition des URLs pour les différents filtres
let filter_URL = {
    0 : `${API_TMDb_DISCOVER_URL}&release_date.lte=${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}&sort_by=release_date.desc&region=FR&language=fr-FR&with_release_type=2|3`,
    1: `${API_TMDb_DISCOVER_URL}&sort_by=popularity.desc&region=FR&language=fr-FR&with_release_type=2|3`,
    2: `${API_TMDb_DISCOVER_URL}&release_date.gte=${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}&region=FR&language=fr-FR&with_release_type=2|3`,
    3: `${API_TMDb_DISCOVER_URL}&primary_release_year=1995&sort_by=popularity.desc&region=FR&language=fr-FR&with_release_type=2|3`
};

// Obtention des films en fonction du choix du filtre
export function getFilms(id_filter) {
    return dispatch =>
    fetch(`${filter_URL[id_filter]}`)
        .then(res => res.json())
        .then(res => res.results)
        .then(films => dispatch(setFilms(films)));
}


// Actualisation de la liste des films
export function setFilms(films) {
    return {
        type: SET_FILMS,
        films
    }
}