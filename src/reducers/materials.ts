import {ActionsType} from '../constants/constants';


export type initialStateType = {
        allData: {
                materials: Object,
                engines: Object,
                fasteningCover: Object,
                optionsForBoat: Object,
                optionsForEngine: Object
        },
        error: Object | null,
        loading: boolean
    
}

const initialState:initialStateType = {
        allData: {
                materials: {},
                engines: {},
                fasteningCover: {},
                optionsForBoat: {},
                optionsForEngine: {}
        },      
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
                    allData: action.payload,
                    error: null,
                    loading: false
            }
            case(ActionsType.FETCH_MATERIAL_ERROR):
                return {
                    allData: state.allData,
                    error: action.payload,
                    loading: false
                }
        }

        return state;
}

export default reducer;

