import {createUseStyles} from "react-jss";

const basketStyles = {
    basket: {
        justifySelf: 'end',
    },
    basket__count: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '9px',
        minWidth: '14px',
        height: "14px",
        backgroundColor: '#ff8b38',
        borderRadius: '50%',
        transform: 'translateY(-8px)',
    },
    basket__amount: {
        fontSize: '9px',
    }
};

export default createUseStyles(basketStyles, {name: 'Basket', index: 200});
