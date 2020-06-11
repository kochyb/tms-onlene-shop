import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import basketReducer from "reducers/basketReducer";
import loadReducer from "reducers/loadReducer";
import productsReducer from "reducers/productsReducer";

const reducers = persistReducer ( {
    key: 'root',
    storage,
    whitelist: [
        'basket',
        'products'
    ]
},
    combineReducers({
    ...basketReducer,
    ...loadReducer,
    ...productsReducer,
}));

export default reducers;
