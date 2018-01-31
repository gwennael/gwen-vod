import { combineReducers } from 'redux';
import films from './films';
import messageLogin from './login';
import { routerReducer } from 'react-router-redux';

// Rassemblement de tous les états des réducteurs enfant
export default combineReducers({
    films,
    messageLogin,
    router: routerReducer,
});
