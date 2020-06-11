import React from 'react';

const withDisplay = WrapperComponents => {
    return ({active, ...props}) => {
        if (active) {
            return <WrapperComponents {...props} />
        }
        return null;
    }
};

export default withDisplay;
