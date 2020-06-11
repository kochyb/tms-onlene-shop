import {createUseStyles} from "react-jss";

const searchStyles = {
    header__search: {
    width: '100%',
    borderRadius: '4px',
    border: 0,
    outline: 'none',
    padding: '8px 4px',
    margin: '16px 0',
}
};

export default createUseStyles(searchStyles, {name: 'Search'});

