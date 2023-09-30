import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default({history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signIn" component={SignIn}/>
                    <Route path="/auth/signUp" component={SignUp}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}