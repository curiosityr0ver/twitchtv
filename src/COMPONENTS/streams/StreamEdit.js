import React from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

const StreamEdit = ({ streams, user }) => {
    console.log(streams);
    return (
        <div>
            StreamEdit
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams,
        user: state.user
    }
}

export default connect(mapStateToProps)(StreamEdit);
