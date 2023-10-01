import React, {lazy, Suspense, useState} from 'react';
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/dashboard" component={DashboardLazy}/>
                            <Route path="/" component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;