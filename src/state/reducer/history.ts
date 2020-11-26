import {
    Action
} from 'redux';

import * as types from './../types/history';

import Item from './../actions/history';

export interface InitState {
    historyList: Item[]
}

interface _Action extends Action {
    payload: any
}

const initState: InitState = {
    historyList: []
}

export default (state: InitState = initState, action: _Action) => {

    const {
        type,
        payload
    } = action;

    switch (type) {
        case types.saveHistory: {
            let {
                historyList
            } = state;

            historyList.unshift(payload);

            return {
                ...state,
                historyList: [...historyList]
            }
        }
    }

    return state;
}
