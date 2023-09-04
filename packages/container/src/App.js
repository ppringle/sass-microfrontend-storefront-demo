import React from 'react';
import {StylesProvider, createGenerateClassName} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <MarketingApp/>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}

export default App;