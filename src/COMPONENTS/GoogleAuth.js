/* eslint-disable no-undef */
import { React, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { signIn, signOut } from '../ACTIONS';
import { connect } from 'react-redux/es/exports';

const GoogleAuth = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(props.user);

        google.accounts.id.initialize({
            client_id: '340776448169-pv7vta4ad78en7mvf9obtrvnns7e59f6.apps.googleusercontent.com',
            callback: (response) => {
                props.signIn(jwtDecode(response.credential))
            },
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )


    });

    const displayMethod = () => {

        if (props.user) {
            return (
                <button id='hey' onClick={() => { props.signOut() }} className='ui secondary button'>Logout</button>
            )
        } else {
            return (
                <div id='signInDiv'></div>
            )
        }
    }

    return (
        <div>
            {displayMethod()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);


