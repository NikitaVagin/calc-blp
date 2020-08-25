import {put, takeEvery, all, call} from 'redux-saga/effects';
import MoySkladApi from './services/moysklad-api';
import {successRequestMaterial, errorRequestMaterial} from './actions/actions'
import { ActionsType } from './constants/constants';

const moyskladService = new MoySkladApi();

function* waitGetMaterial() {
    yield takeEvery(ActionsType.FETCH_MATERIAL_REQUEST, fetchMaterials)
}


function* fetchMaterials () {
    try{
        const data = yield call(() => moyskladService.getMaterial())
        yield put(successRequestMaterial(data));
    }
    catch(e){
        yield put(errorRequestMaterial(e));
    }
}

export default function* rootSaga(){
    yield all([
        waitGetMaterial()
    ])
};