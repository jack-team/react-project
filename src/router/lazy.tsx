import React, {
    useState,
    useEffect
} from 'react';

interface Init {
    Lazy: any
}

const initState: Init = {
    Lazy: null
}

const LazyLoad = (lazyFn: Function) => {
    return (props: any) => {
        const [
            state,
            setState
        ] = useState(initState);

        const onLoad = () => {
            lazyFn().then((lazy: any) => {
                setState({Lazy: lazy.default})
            })
        }

        useEffect(onLoad, []);

        return state.Lazy && <state.Lazy {...props} />;
    }
}

export default LazyLoad;
