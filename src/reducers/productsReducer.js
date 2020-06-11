import { handleActions } from 'redux-actions';

import {addProducts, searchProducts, sortAsc, sortDesc} from "actions";

import { productsState } from 'constants/defaultState';

export default {
    products: handleActions({
        [addProducts]: (state, {payload = []}) => {
            return {origin: payload, current: payload, sortDirection: 'Desc'};
        },

        [searchProducts]: (state, {payload = ''}) => {
            const searchText = payload.searchString;
            return {...state, current:state.origin.filter(product =>
                    product.title.toLowerCase().includes(searchText.toLowerCase())
                )
            }
        },
        [sortAsc]: (state) => {
            const newState = [...state.current];

            newState.sortDirection = 'Desc';
            newState.sort((a, b) => a.price.value - b.price.value);

            return { ...state, current: newState, sortDirection: newState.sortDirection };
        },
        [sortDesc]: (state) => {
            const newState = [...state.current];

            newState.sortDirection = 'Asc';
            newState.sort((a, b) => b.price.value - a.price.value);

            return { ...state, current: newState, sortDirection: newState.sortDirection };
        },
    }, productsState),
};
