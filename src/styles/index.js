import {createUseStyles} from "react-jss";

import globalStyles from "styles/global";
import headerStyles from 'styles/containers/Header';
import basketButtonStyles from "styles/components/BasketButton";
import logoStyles from 'styles/components/Logo';
import productHeaderStyles from "styles/components/ProductHeader";

const rootStyles = {
    '@global': {
        ...globalStyles,
        ...headerStyles,
        ...basketButtonStyles,
        ...logoStyles,
        ...productHeaderStyles,
    }
};

export default createUseStyles(rootStyles, {name: 'root', index: 100});
