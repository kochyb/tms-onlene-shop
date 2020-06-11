import { put, call, all, takeLatest, select } from 'redux-saga/effects';
import { startLoader,addProducts, endLoader, getData} from "actions";
import {serverGet} from "helpers/requests";
import {productUrl, rateUrl} from "constants/urls";

export function* getDataSaga() {
    try {
        const currentProducts = yield select(state => state.products);
        // yield put(startLoader());
        //
        // const [products, rate] = yield all([
        //     call(serverGet, productUrl),
        //     // call(serverGet, rateUrl)
        // ]);
        //
        //
        // const updateProducts = products.map(product => {
        //     // product.price.value *= rate.Cur_OfficialRate;
        //     product.price.currency = 'BYN';
        //
        //     return product;
        // });
        //
        // yield put(addProducts(updateProducts));
        // yield put(endLoader());

        if (!currentProducts.length) {
            yield put(startLoader());

            const [products, rate] = yield all([
                call(serverGet, productUrl),
                // call(serverGet, rateUrl)
            ]);

            const updateProducts = products.map(product => {
                // product.price.value *= rate.Cur_OfficialRate;
                product.price.currency = 'BYN';

                return product;
            });

            yield put(addProducts(updateProducts));
            yield put(endLoader());
        }
    } catch (err) {
        console.log(err);
        yield put(endLoader());
    }
}

export default function* products() {
    yield all([
        takeLatest(getData.toString(), getDataSaga)
    ]);
}
