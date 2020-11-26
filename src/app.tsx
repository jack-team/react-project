import React from 'react';

import {
    BrowserRouter as Router
} from 'react-router-dom';

import {
    CacheSwitch
} from 'react-router-cache-route';

import {
    PersistGate
} from 'redux-persist/integration/react';

import {
    Provider
} from 'react-redux';

import Store, {
    persist
} from './state';

import BaseRoutes from './router';

const App = () => {
    return (
        <Provider store={Store}>
            <PersistGate persistor={persist}>
                <Router>
                    <CacheSwitch>
                        {BaseRoutes}
                    </CacheSwitch>
                </Router>
            </PersistGate>
        </Provider>
    )
}

export default App;
