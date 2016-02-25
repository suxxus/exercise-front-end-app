import 'babel-polyfill';
import {
    defaultTo,
    always,
    gt,
    reduce,
    curry,
    insert,
    inc,
    pipe
}
from 'ramda';

export const actionType = action => action && action.type ? action.type : '';

export const doAction = value => {

    const defaultVal = value && value.defaultVal ? value.defaultVal : '',
        actions = value && value.actions ? value.actions : {},
        action = value && value.action ? value.action : '';

    return defaultTo(always(defaultVal))(actions[actionType(action)]);
};

export const getGTFromList = list => reduce((previous, actual) => gt(previous, actual) ? previous : actual, 0, list);
export const insertIncrementedValAtHead = curry((list, value) => insert(0, inc(value), list));
export const insertHighestListValuePlusOneAtHead = list => pipe(getGTFromList, insertIncrementedValAtHead(list))(list);

export const timeout = delay => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, delay);
});
