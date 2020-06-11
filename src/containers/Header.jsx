import React, {useState} from 'react';
// import {object, array} from 'prop-types';
// import {withRouter} from "react-router";
// import {compose} from "redux";
// import {connect} from 'react-redux';
import {useSelector} from "react-redux";

import Logo from "../components/Logo";
import Search from "../components/Search";
import Basket from "../components/Basket";
import Modal from "../components/Modal";
import Cart from "../containers/Cart";

const Header = (
    // { basket = {}, products}
) => {
    const [modalActive, setModalActive] = useState(false);
    const products = useSelector(state => state.products.current);
    const basket = useSelector(state => state.basket);

    const openModal = () => {
        setModalActive(true);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    const { count = 0, amount = 0, productIds = [] } = basket;
    const basketProducts = products.filter(product => productIds.includes(product.id));


    return (
        <div className="header">
            <div className="container header__container">
                <Logo/>
                <Search/>
                <Basket onClick={openModal} count={count} amount={amount}/>
                <Modal active={modalActive} onClose={closeModal}>
                    {basketProducts.length
                        ? basketProducts.map(product => (
                            <Cart key={product.id} product={product} />
                        ))
                        : (
                            <div>Корзина пуста!</div>
                        )
                    }
                </Modal>
            </div>
        </div>
    );
};

// Header.propTypes = {
//     basket: object.isRequired,
//     products: array
// };

// const mapStateToProps = state => ({
//     basket: state.basket,
//     products: state.products,
// });

// export default compose(
//     withRouter,
//     connect(mapStateToProps),
// )(Header);

export default Header;
