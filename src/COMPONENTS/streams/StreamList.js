import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { fetchStreams } from '../../ACTIONS';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StreamCreate from './StreamCreate';

const StreamList = ({ streams, fetchStreams, user }) => {

    useEffect(() => {
        fetchStreams()
    }, []);

    function displayMethod() {

        if (streams) {
            const strArr = Object.values(streams) //convert object to array
            return (strArr.map((stream) => {
                if (user && stream.key === user.email) {
                    return (
                        <div className='item' key={stream.id}>
                            <i className='large middle aligned icon camera' />
                            <div className="content">
                                <div style={{ fontSize: "large" }}>
                                    {stream.title}
                                    <div className='ui right floated content'>
                                        <button className='ui button'>Edit</button>
                                        <button className='ui button red'>Delete</button>
                                    </div>
                                </div>
                                <div className="description">
                                    {stream.description}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className='item' key={stream.id}>
                            <i className='large middle aligned icon camera' />
                            <div className="content">
                                <div style={{ fontSize: "large" }}>{stream.title}</div>
                                <div className="description">
                                    {stream.description}
                                </div>
                            </div>
                        </div>
                    )
                }

            }))

        } else {
            return (
                <h2>hey you</h2>
            )
        }
    }
    function createLinkMethod() {
        if (user) {
            return (
                <div style={{ textAlign: 'right' }} >
                    <Link to="/streams/create" className='ui button primary'><h3>Create</h3></Link>
                </div>
            )
        }
    }
    return (
        <div>
            StreamList
            <div className='ui celled list'>{displayMethod()}</div>
            {createLinkMethod()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
