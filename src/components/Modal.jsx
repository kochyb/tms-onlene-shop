import React from 'react';

import withDisplay from "../HOCs/withDisplay";
import {withRouter} from "react-router";
import {compose} from "redux";
import useStyles from "../styles/components/Modal";

const Modal = ({children, onClose, classes = useStyles()}) => (
            <>
                <div onClick={onClose} className={classes.modalBackground}/>
                <div className={classes.modalRoot}>
                    {children}
                </div>
            </>
);


export default compose(
    withRouter,
    withDisplay,
)(Modal);
