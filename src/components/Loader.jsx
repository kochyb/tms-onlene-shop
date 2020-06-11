import React from 'react';
import loader from '../assets/loader.svg'
import withDisplay from "HOCs/withDisplay";
import useStyles from 'styles/components/Loader'


const Loader = ({classes = useStyles()}) => (
       <div className={classes.loader}>
        <img src={loader} alt="loader"/>
    </div>
   );

Loader.displayName = 'Loader';

export default withDisplay(Loader);

