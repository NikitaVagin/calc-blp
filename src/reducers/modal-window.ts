import {ActionsType} from '../constants/constants';

//Поменять типы
export type initialStateType = {
        image: string | null,
        title: string | null,
        body: any
}

const initialState = null

const reducer = (state:any, action:any) => {
    if(typeof state === 'undefined'){
        return initialState
    }
    switch(action.type){
        case(ActionsType.SHOW_MODAL_WINDOW):
        return {
             modalProps: action.payload
        }
        case(ActionsType.CLOSE_MODAL_WINDOW):
        return null
    }
    return state;
}

export default reducer;