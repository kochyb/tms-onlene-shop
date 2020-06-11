import {all, fork} from 'redux-saga/effects';
import products from "sagas/productsSaga";

export default function* rootSaga() {
    yield all([
        fork(products)
    ])
}
