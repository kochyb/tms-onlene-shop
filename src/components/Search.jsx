import React from 'react';
import {connect} from 'react-redux';
import useStyles from 'styles/components/Search';

import {searchProducts} from 'actions';

const Search = ({searchProducts}) => {
    const classes = useStyles();

    const handleInput = (event) => {
        event.preventDefault();
        searchProducts({searchString: event.target.value});
    };

    return (
        <form>
            <input
                onInput={handleInput}
                id="search"
                className={classes.header__search}
                type="text"
                placeholder="Search"
            />
        </form>
    );
};

const mapDispatchToProps = {
    searchProducts
};

const mapStateToProps = (state) => ({
    searchString: state.searchString
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// export default class Search extends Component {
//     render() {
//         return (
//             <form>
//                 <input id="search" className="header__search" type="text" placeholder="Search" />
//             </form>
//         );
//     }
// }
