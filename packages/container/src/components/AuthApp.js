import React, {useRef, useEffect} from 'react';
import {mount} from 'auth/AuthApp';
import {useHistory} from "react-router-dom";

export default () => {

    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {

        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: newPathName}) => {
                const {pathname} = history.location;
                if (pathname !== newPathName) {
                    history.push(newPathName);
                }
            },
            onSignIn: () => {
                console.log("User signed in");
            }
        });

        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref}/>
}