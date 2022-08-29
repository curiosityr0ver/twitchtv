/* eslint-disable no-undef */
import { React, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const GoogleAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        google.accounts.id.initialize({
            client_id: '340776448169-pv7vta4ad78en7mvf9obtrvnns7e59f6.apps.googleusercontent.com',
            callback: (response) => {
                setUser(jwtDecode(response.credential))
            },
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )


    }, [user]);

    const displayMethod = () => {

        if (user) {

            return (
                <button id='hey' onClick={() => { setUser(null); }} className='ui secondary button'>Logout</button>
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

export default GoogleAuth;


