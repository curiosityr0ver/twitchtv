import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            {/* <NavLink to='/' className="">Home</NavLink> */}
            <div className="right menu">
                All Streams

            </div>

        </div>
    );
}

export default Header;
