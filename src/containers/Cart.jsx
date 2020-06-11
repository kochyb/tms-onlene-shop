import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import {withRouter} from 'react-router';
// import {compose} from "redux";
import {Link, useParams} from 'react-router-dom';
import {connect, useSelector, useDispatch} from 'react-redux';
import {parsePrice} from 'helpers/index'

import {addToBasket, removeFromBasket} from 'actions';

import useStyles from 'styles/containers/Cart'

import CatalogButton from "components/CatalogButton";

const Cart = ({ product }) => {
    const classes = useStyles();
    const [stateProduct, setStateProduct] = useState({price: {}});
    const params = useParams();
    const products = useSelector(state => state.products.current);
    // const dispatch = useDispatch();


    useEffect(() => {
        const { id } = params;
        if (products.length && id) {
            const stateProduct = products.find(item => item.id === id) || {};
            setStateProduct(stateProduct);
        }
        }, []);


    // const handleBasket = (product) => {
    //     return (active) => {
    //         active ? dispatch(addToBasket({productId: product.id, priceValue: product.price.value}))
    //             : dispatch(removeFromBasket({productId: product.id, priceValue: product.price.value}));
    //     }
    // };


    const productForView = product || stateProduct;

    return (
        <div className={classes.cart}>
            <div className={classes.cart__imageBlock}>
                <img className={classes.cart__image} src={productForView.imageLink} alt={productForView.title}/>
            </div>
            <div className={classes.cart__text}>
                <Link to={`${productForView.id}`} className={classes.cart__title}>{productForView.title}</Link>
                <div className={classes.cart__desc} dangerouslySetInnerHTML={{__html: productForView.description}}/>
            </div>
            <div className={classes.cart__priceBlock}>
                <div className={classes.cart__price}>{`${productForView.price.currency} ${parsePrice(productForView.price.value)}`}</div>
                <CatalogButton product={productForView}/>
            </div>
        </div>
    );
};

// const mapStateToProps = state => ({
//     products: state.products
// });

// const mapDispatchToProps = {
//     addToBasket,
//     removeFromBasket,
// };

// Cart.propTypes = {
//     addToBasket: PropTypes.func,
//     removeFromBasket: PropTypes.func,
// };

// export default compose(
//     withRouter,
//     connect(mapStateToProps, mapDispatchToProps),
//     memo,
// )(Cart);

export default Cart;
