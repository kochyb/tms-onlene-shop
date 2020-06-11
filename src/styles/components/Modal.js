import {createUseStyles} from "react-jss";

const modalStyles = {
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    modalRoot: {
        backgroundColor: '#ffffff',
        padding: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#000000',
        overflow: 'auto',
        maxHeight: '90vh',
    },
};

export default createUseStyles(modalStyles, {name: 'Modal'});

