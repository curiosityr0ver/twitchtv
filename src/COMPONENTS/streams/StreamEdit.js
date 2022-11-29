import { toInteger } from 'lodash';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../ACTIONS';

const StreamEdit = ({ streams, user, fetchStreams }) => {

    useEffect(() => {
        fetchStreams()
    }, []);

    function displayMethod() {
        if (streams) {
            streams = Object.values(streams) //object to array
            const id = parseInt(window.location.pathname.split("/")[3]) //getting id from url
            var res = -1
            for (let i = 0; i < streams.length; i++) {
                if (streams[i].id == id) {
                    res = i;
                }
            }
            if (res >= 0) {
                return (
                    <div>
                        < h1 > {streams[res].title}</h1 >
                        <p>{streams[res].description}</p>
                    </div>
                )
            }
        }
    }
    return (
        <div>
            StreamEdit
            {displayMethod()}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

    return {
        streams: state.streams,
        user: state.user,
        ownProps: ownProps //real props this componenent may have received
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamEdit);
