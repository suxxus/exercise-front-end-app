import React from 'react';
import {omit, addIndex, map, keys} from 'ramda';

export
default React.createClass({

    propTypes: {
        metadata: React.PropTypes.object
    },

    render() {

        const metadata = omit(['id'], this.props.metadata);
        return (<ul className="info-metadata">
                    {addIndex(map)((item, idx) => <li key={idx}>{metadata[item]}</li>, keys(metadata))}
                </ul>);
    }
});
