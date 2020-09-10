import {ActionsType} from '../constants/constants';


export type initialStateType = {
        idMaterial: string | null,
        width: number | null,
        length: number | null,
        fasteningСover: string | null
    
}

const initialState:initialStateType = {
    idMaterial: null,
    width: null,
    length: null,
    fasteningСover: null
}

const reducer = (state:any, action:any) => {
    if(typeof state === 'undefined'){
        return initialState
    }
    switch(action.type){
        case(ActionsType.SELECT_MATERIAL):
            return{
                ...state,
                idMaterial: action.payload
            }
    }
    return state;
}

export default reducer;