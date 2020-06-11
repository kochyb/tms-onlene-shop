import { createActions } from 'redux-actions';

export const {
    addProducts,
    searchProducts,
    getData,
    sortAsc,
    sortDesc
} = createActions(
    'ADD_PRODUCTS',
    'SEARCH_PRODUCTS',
    'GET_DATA',
    'SORT_ASC',
    'SORT_DESC'
);
