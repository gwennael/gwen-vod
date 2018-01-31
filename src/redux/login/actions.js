import { API_REQRES_URL } from '../../constants';

// Actions/Fonctions du reducteur pour le login

export const SET_MESSAGE = 'SET_MESSAGE';

// Fonction de la connexion (POST)
export function login (email, password) {

    // Paramètres de la requête de connexion
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return dispatch =>
    fetch(`${API_REQRES_URL}/login`, requestOptions)
        .then(res => res.json())
        .then(res => {
            // Si la connexion a réussi
            if (res.token) {
                dispatch(resultLogin([res.token, 200]));
            }
            // Si la connexion a échoué
            else{
                dispatch(resultLogin([res.error, 400]));
            }
        });
}

// Actualisation du message de connexion
export function resultLogin(messageLogin) {
    return {
        type: SET_MESSAGE,
        messageLogin
    }
}
