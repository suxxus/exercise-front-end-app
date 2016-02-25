import { head, set, lensProp, assocPath, pipe } from 'ramda';
import { insertHighestListValuePlusOneAtHead } from '../utils/helpers';


export const createNewMetric = (state, action) => {

    const ids = insertHighestListValuePlusOneAtHead(state.result.charts),
        first = head(ids);

    action.shape.id = first;

    const charts = set(lensProp(first), action.shape, state.entities.charts);

    return pipe(assocPath(['entities', 'charts'], charts),
        assocPath(['result', 'charts'], ids))(state);
};
