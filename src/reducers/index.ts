import {combineReducers} from 'redux';
import currentModal from './modal-window';
import materials from './materials';
import currentValuesBoat from './current-values-boat';

export default combineReducers({
    currentModal,
    materials,
    currentValuesBoat
})