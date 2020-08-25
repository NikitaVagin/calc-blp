import {combineReducers} from 'redux';
import currentModal from './modal-window';
import data from './materials';
import currentValuesBoat from './current-values-boat';

export default combineReducers({
    currentModal,
    data,
    currentValuesBoat
})