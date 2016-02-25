import { filter, dissoc, assocPath, toString, pipe } from 'ramda';
export const deleteMetric = (state, action) => {

    const chartsIds = filter(id => id !== action.id, state.result.charts),

        charts = dissoc(toString(action.id), state.entities.charts),
        metadata = dissoc(toString(action.id), state.entities.metadata);

    return pipe(assocPath(['entities', 'charts'], charts),
        assocPath(['entities', 'metadata'], metadata),
        assocPath(['result', 'charts'], chartsIds))(state);
};
