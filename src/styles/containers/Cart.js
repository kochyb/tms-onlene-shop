import {createUseStyles} from "react-jss";

const cartStyles = {
    cart: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        columnGap: '20px',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '4px',
    },
    cart__imageBlock: {
        width: '175px',
        height: '115px',
        textAlign: 'center',
    },
    cart__image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    cart__text: {
        alignSelf: 'center',
    },
    cart__title: {
        paddingBottom: '20px',
        fontWeight: 600,
    },
    cart__desc: {
        fontSize: '12px',
    },
    cart__priceBlock: {
        alignSelf: 'end',
        justifySelf: 'end',
        textAlign: 'right',
    },
    cart__price: {
        paddingBottom: '8px',
    }
};

export default createUseStyles(cartStyles, {name:'Cart', index: 300});
