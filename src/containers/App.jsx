import React, {memo, useEffect} from 'react';
import {hot} from "react-hot-loader/root";
import {connect} from 'react-redux';
import {compose} from "redux";

import Loader from "../components/Loader";
import Header from "./Header";
import Main from "../components/Main";

import { getData } from 'actions';

import useRootStyles from 'styles';

const App = ({load, products, ...props}) => {
    useRootStyles();
    useEffect(() => {
        props.getData();
    }, []);

    return (
        <>
            <Loader active={load}/>
            <Header/>
            <Main />
        </>
    );
};

const mapStateToProps = state => ({
    load: state.load,
});

const mapDispatchToProps = {
    getData,
};

export default compose(
    hot,
    connect(mapStateToProps, mapDispatchToProps),
    memo,
)(App);
