import { React, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const GoogleAuth = () => {

    function handle(response) {
        console.log(jwtDecode(response.credential))
    }

    useEffect(() => {



        // eslint-disable-next-line no-undef
        google.accounts.id.initialize({
            client_id: '340776448169-pv7vta4ad78en7mvf9obtrvnns7e59f6.apps.googleusercontent.com',
            callback: handle
        })

        // eslint-disable-next-line no-undef
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    });
    return (
        <div>
            <div id='signInDiv'>

            </div>
        </div>
    );
}

export default GoogleAuth;
