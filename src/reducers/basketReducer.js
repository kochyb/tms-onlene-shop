import { handleActions } from 'redux-actions';

import { addToBasket, removeFromBasket } from "actions";
import { basketState } from 'constants/defaultState';

const defaultPayload = {productId: '', priceValue: 0};

export default {
    basket: handleActions({
        [addToBasket]: (state, { payload = defaultPayload }) => {
            const newState = { ...state, productIds: [...state.productIds] };

            newState.productIds.push(payload.productId);
            newState.count += 1;
            newState.amount += payload.priceValue;

            return newState;
        },
        [removeFromBasket]: (state, { payload = defaultPayload }) => {
            const newState = {...state, productIds: [...state.productIds]};

            newState.productIds = newState.productIds.filter(productId => productId !== payload.productId);
            newState.count -= 1;
            newState.amount -= payload.priceValue;

            return newState;
        },
    }, basketState),
};
