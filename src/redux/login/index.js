import { SET_MESSAGE } from './actions';

const initialState = [];

// Etat du reducteur pour le login
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGE:
            return action.messageLogin;
        default:
            return state;
    }
};
