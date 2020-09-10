import {put, takeEvery, all, call} from 'redux-saga/effects';
import MoySkladApi from './services/moysklad-api';
import {successRequestMaterial, errorRequestMaterial, showModalindow} from './actions/actions'
import { ActionsType } from './constants/constants';

const moyskladService = new MoySkladApi();

function* waitGetMaterial() {
    yield takeEvery(ActionsType.FETCH_MATERIAL_REQUEST, fetchMaterials);
    yield takeEvery(ActionsType.START_SHOW_MODAL, fetchModalData)
}

function* fetchModalData ({payload}:any) {
    try{
        payload.image  = yield call(() => _getImage(payload.image))
        yield put(showModalindow(payload))
    }
    catch(e) {
        yield put(errorRequestMaterial(e));
    }
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

async function _getImage (imageSrc: string) {
    const image = await moyskladService.getImage(imageSrc);
    return String(image)
  }

export default function* rootSaga(){
    yield all([
        waitGetMaterial()
    ])
};