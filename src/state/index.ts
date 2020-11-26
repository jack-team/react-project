import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import {
    persistStore,
    persistReducer
} from 'redux-persist';

import thunk from 'redux-thunk';
import reducers from './reducer';

import localStorage from 'redux-persist/lib/storage';

const createStoreAsync = applyMiddleware(thunk)(createStore);

const opts = {
    blacklist: [],
    key: `AppStore`,
    storage: localStorage
};

const store = createStoreAsync(
    persistReducer(opts, combineReducers(reducers))
)

export const persist = persistStore(store);

export default store;
