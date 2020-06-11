import React from 'react';
import PropTypes from 'prop-types';

import useStyles from 'styles/components/Basket'
import {parsePrice} from "helpers";

const Basket = ({count, amount, onClick}) => {
    const classes = useStyles();
        return (
            <div className={classes.basket}>
                <div>Basket<span id="count" className={classes.basket__count}>{count}</span></div>
                <div className={classes.basket__amount} onClick={onClick}>amount: <span id="amount">{parsePrice(amount)} BYN</span></div>
            </div>
        )
};

Basket.propTypes = {
    count: PropTypes.number,
    amount: PropTypes.number,
};

export default Basket;
