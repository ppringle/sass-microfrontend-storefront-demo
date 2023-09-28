import React, {useRef, useEffect} from 'react';
import {mount} from 'marketing/MarketingApp';
import {useHistory} from "react-router-dom";

export default () => {

    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {

        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname: newPathName}) => {
                const {pathname} = history.location;
                if (pathname !== newPathName) {
                    history.push(newPathName);
                }
            }
        });

        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref}/>
}