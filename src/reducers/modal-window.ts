import {ActionsType} from '../constants/constants';

export type initialStateType = {
        nameModal: string | null,
        type: string | null
        title: string | null,
        body: any
}

const initialState:initialStateType = {
        nameModal: null,
        type: null,
        title: null,
        body: null,
}

const reducer = (state:any, action:any) => {
    if(typeof state === 'undefined'){
        return initialState
    }
    switch(action.type){
        case(ActionsType.SHOW_MODAL_WINDOW):
        return {
             ...action.payload
        }
        case(ActionsType.CLOSE_MODAL_WINDOW):
        return {
            nameModal: null,
            type: null,
            title: null,
            body: null,
        }
    }
    return state;
}

export default reducer;