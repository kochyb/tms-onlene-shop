import {createUseStyles} from "react-jss";
import {flexCenter} from 'styles/mixins';

const loaderStyles = {
        loader: {
            ...flexCenter,
            position: 'fixed',
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
}
};

export default createUseStyles(loaderStyles, {name: 'Loader'});

