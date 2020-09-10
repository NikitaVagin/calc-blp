import {combineReducers} from 'redux';
import modals from './modal-window';
import data from './materials';
import currentValuesBoat from './current-values-boat';

export default combineReducers({
    modals,
    data,
    currentValuesBoat
})