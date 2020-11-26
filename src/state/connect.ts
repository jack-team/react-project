import {
    connect
} from 'react-redux';

import {
    Dispatch,
    bindActionCreators
} from 'redux';

type Keys = Array<string>;

interface Actions {
    [propName: string]: object;
}

export default (
    keys?: Keys | Actions,
    actions?: Keys | Actions
): Function => {
    const isArray: boolean = (
        Array.isArray(keys)
    )

    if (!isArray) {
        actions = keys;
        keys = [];
    }

    const _next = connect((_state_) => {
        const _reducers: any = {};
        const _keys = [...keys] as string[];

        _keys.forEach((key: never) => (
            _reducers[key] = _state_[key]
        ));

        return _reducers;
    }, (dispatch: Dispatch) => {
        const _actions: any = {};

        Object.keys({...actions}).forEach((name: never) => (
            _actions[name] = bindActionCreators((actions as any)[name], dispatch)
        ));

        return _actions;
    }, null, {forwardRef: true});

    return (component: any) => _next(component);
}
