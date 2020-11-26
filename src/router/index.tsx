import React from 'react';

import {
    RouteConfig
} from './types';

import configs from './config';

import {
    CacheRoute
} from 'react-router-cache-route';

export default (
    configs.map((route: RouteConfig) => {
        const {
            path,
            exact,
            component
        } = route;
        return (
            <CacheRoute
                key={path}
                path={path}
                exact={exact}
                component={component}
                saveScrollPosition={true}
                className="route-wrapper"
            />
        )
    })
);
