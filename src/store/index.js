import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';

import reducers from "reducers";
import rootSaga from "sagas";
import middleware, {sagaMiddleware} from "store/middleware";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    reducers,
    composeEnhancers(middleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
