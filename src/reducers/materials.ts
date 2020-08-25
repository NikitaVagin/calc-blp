import {ActionsType} from '../constants/constants';


export type initialStateType = {
        material: Object,
        error: Object | null,
        loading: boolean
    
}

const initialState:initialStateType = {
        material: {},
        error: null,
        loading: true

}


const reducer = (state:any, action:any) => {
        if(typeof state === 'undefined'){
            return initialState
        }
        switch(action.type){
            case(ActionsType.FETCH_MATERIAL_REQUEST):
                return {
                   ...state
                }
            case(ActionsType.FETCH_MATERIAL_SUCCESS):
            return {
                    material: action.payload,
                    error: null,
                    loading: false
            }
            case(ActionsType.FETCH_MATERIAL_ERROR):
                return {
                    material: state.materials.material,
                    error: action.payload,
                    loading: false
                }
        }

        return state;
}

export default reducer;

