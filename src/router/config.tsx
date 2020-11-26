import {
    RouteConfig
} from './types';

import LazyLoad from './lazy';

const routes: RouteConfig[] = [
    {
        path: `/`,
        exact: true,
        component: LazyLoad(() => import('../pages'))
    },
    {
        exact: true,
        path: `/history`,
        component: LazyLoad(() => import('../pages/history'))
    }
]


export default routes;
