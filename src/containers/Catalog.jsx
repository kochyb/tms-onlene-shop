import React from 'react';
import {connect, useSelector} from 'react-redux';

import Cart from "./Cart";

const Catalog = () => {
    const products = useSelector(state => state.products.current);

    return (
        products.map(product => (
                <Cart key={product.id} product={product}/>
            ))
    );

};

// const mapStateToProps = state => ({
//     products: state.products,
// });

// export default connect(mapStateToProps) (Catalog);

export default Catalog;




