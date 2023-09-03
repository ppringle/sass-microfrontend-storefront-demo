import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount function to start up the app...
const mount = (el) => {
    ReactDOM.render(<App/>, el);
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing-dev-root');
    if (el) {
        mount(el);
    }
}

//We are running the app through 'container'
export {mount};