import React, {lazy, Suspense, useState, useEffect} from 'react';
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import { createBrowserHistory } from 'history'

import Header from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/"/>}
                                <DashboardLazy/>
                            </Route>
                            <Route path="/" component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}

export default App;