import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {createLogger} from 'redux-logger';
import reducer from './reducers/index';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
const reduxSaga = createSagaMiddleWare(); 

const logger = createLogger();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxSaga, logger)));

reduxSaga.run(rootSaga);

export default store;
