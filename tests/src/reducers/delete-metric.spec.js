import test from 'blue-tape';
import R from 'ramda';
import * as Mocked from '../../mocks/mock';
import deepFreeze from 'deep-freeze';
import {
    deleteMetric
}
from 'scripts/reducers/delete-metric';

let before = test,
    after = test,
    state,
    nextState;

const setup = () => {

    state = deepFreeze({
        entities: {
            charts: {
                1: {
                    id: 1
                },
                2: {
                    id: 2
                }
            },
            metadata: {
                1: {
                    id: 1
                },
                2: {
                    id: 2
                }
            }
        },
        result: {
            charts: [1, 2]
        }
    });

    nextState = {
        entities: {
            charts: {
                1: {
                    id: 1
                }
            },
            metadata: {
                1: {
                    id: 1
                }

            }
        },
        result: {
            charts: [1]
        }
    };

};

before('desc:', t => {
    t.pass('reducers: delete-metric');
    setup();
    t.end();
});

test('deleteMetric reducer', t => {

    const actual = deleteMetric(state, {
            type: Mocked.ConstantsActions.DELETE_METRIC,
            id: 2
        }),
        expect = nextState;

    t.deepEqual(actual, expect, 'should remove metric from state');
    t.end();
});

after('end', t => {
    t.pass('//--------------------------------------');
    t.end();
});
