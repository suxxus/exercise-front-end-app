import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { pipe, assoc } from 'ramda';
import App from './containers/app';
import { initialState } from './utils/state-shape';
import configureStore from './store/configure-store';

const initstate = pipe(assoc('userId', '1'), // TODO, get id from service
        assoc('user', 'jhondoe@mimail.com') // TODO, get user name (ex pepe@mail.com) from service
    )(initialState()),

    store = configureStore({
        metrics: initstate
    });

render( <Provider store = { store }>
        <App dispatch = { store.dispatch } />
      </Provider>,
    document.querySelector('#platform-ui')
);
