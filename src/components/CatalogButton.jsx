import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {addToBasket, removeFromBasket} from "actions";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CatalogButton = ({product, ...props}) => {
    const [active, setActiveData] = useState({ status: false });


    useEffect(() => {
        if (props.basket.productIds.find(item => item === product.id)) {
            setActiveData({ status: true });
        } else {
            setActiveData({ status: false });
        }
    }, [props.basket]);

    const payload = { productId: product.id, priceValue: product.price.value, priceCurrency: product.price.currency };
    const handleClick = (event) => {
        event.preventDefault();
        setActiveData((prevState) => ({ status: !prevState.status }));
        active.status ? props.removeFromBasket(payload) : props.addToBasket(payload);
    };

    const text = active.status ? 'Remove from Basket' : 'Add to Basket';

        return (
            <a className={classNames('cart__button', {_active: active.status})}
               onClick={handleClick}
               href="#">{text}</a>
        )
};

const mapStateToProps = (state) => ({
    basket: state.basket,
});

const mapDispatchToProps = {
    addToBasket,
    removeFromBasket,
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(CatalogButton);

// export default class CatalogButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//
//     handleClick(event) {
//         event.preventDefault();
//         this.setState(prevState => ({active: !prevState.active}), () => {
//             this.props.onClick(this.state.active);
//         });
//     };
//
//
//     render() {
//         const {active} = this.state;
//         const text = active ? 'Remove from Basket' : 'Add to Basket';
//         return (
//             <a className={classNames('cart__button', {_active: active})}
//                onClick={this.handleClick}
//                href="#">{text}</a>
//         )
//     }
//
// }
//
// CatalogButton.propTypes = {
//     onClick: PropTypes.func
// };
