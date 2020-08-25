import {ActionsType} from '../constants/constants';



export const selectMaterial = (id:any) =>{
    return {
        type: ActionsType.SELECT_MATERIAL,
        payload: id
    }
}

export const showModalindow = (obj:object) => {
    return {
        type: ActionsType.SHOW_MODAL_WINDOW,
        payload: obj

    }
}

export const closeModalindow = () => {
    return {
        type: ActionsType.CLOSE_MODAL_WINDOW,
    }
}

export const startRequestMaterial = () =>{
    return {
        type: ActionsType.FETCH_MATERIAL_REQUEST
    }
}

export const successRequestMaterial = (material:any) =>{
    return {
        type: ActionsType.FETCH_MATERIAL_SUCCESS,
        payload: material
    }
}

export const errorRequestMaterial = (err:any) =>{
    return {
            type: ActionsType.FETCH_MATERIAL_ERROR,
            payload: err
    }
}
