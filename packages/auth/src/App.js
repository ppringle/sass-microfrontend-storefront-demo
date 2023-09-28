import React from 'react';
import {Switch, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}