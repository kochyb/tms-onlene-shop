import React, {Component} from 'react';
import {Link, Router} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import { compose } from 'redux';
import { sortAsc, sortDesc } from 'actions';

// import useStyles from 'styles/components/MainBodyHeader';

const ProductHeader = (props) => {
    // const classses = useSelector();
    const sortDirection = useSelector(state => state.products.sortDirection);

    const handleClick = (event) => {
        event.preventDefault();
        if (sortDirection === 'Desc') {
            props.sortDesc();
        } else if (sortDirection === 'Asc') {
            props.sortAsc();
        }

    };

    return (
            <div className="products__header">
                <Link to="/">Home</Link>
                <Link to="/notfound/">Page not found</Link>
                <h3>Electronics</h3>
                <div>Sort by price:
                    <a id="sort" href="#" className="products__sort"
                       onClick={handleClick}
                    >
                        {sortDirection}
                    </a></div>
            </div>
        );
};

const mapDispatchToProps = {
    sortAsc,
    sortDesc,
};

export default compose(
    connect(
        null,
        mapDispatchToProps,
    ),
)(ProductHeader);


// export default class ProductHeader extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false,
//             sortProducts: [],
//         };
//         // this.sortClick = this.sortClick.bind(this);
//     }
//
//     // sortClick(event){
//     //     event.preventDefault();
//     //     this.setState(prevState => ({active: !prevState.active,
//     //         products: !prevState.active ? sortAsc (prevState.products) : sortDesc (prevState.products)
//     //         })
//     //     );
//     // };
//
//     onSort = sortField => {
//         // const cloneProducts = this.state.products;
//         // const cloneProducts = useSelector(state => state.products);
//         // console.log(cloneProducts);
//         const sortProducts = this.props.products;
//         console.log(sortProducts);
//     };
//
//
//     render() {
//         const {active} = this.state;
//         const text = active ? 'Desc' : 'Asc';
//         return (
//             <div className="products__header">
//                 <Link to="/">Home</Link>
//                 <Link to="/notfound/">Page not found</Link>
//                 <h3>Electronics</h3>
//                 <div>Sort by price: <a id="sort" href="#" className="products__sort"
//                                        onClick={this.onSort.bind(null, 'price.value')}>{text}</a></div>
//             </div>
//         );
//     }
// }


