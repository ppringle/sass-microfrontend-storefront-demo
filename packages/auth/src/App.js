import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default({history, onSignIn}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signIn">
                        <SignIn onSignIn={onSignIn}/>
                    </Route>
                    <Route path="/auth/signUp">
                        <SignUp onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}