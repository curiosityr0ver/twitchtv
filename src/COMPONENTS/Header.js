import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css'
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div id='header' className='ui secondary pointing menu'>
            <Link to="/" className='item'><h3>Home</h3></Link>
            <div className="right menu">
                <Link to="/streams/create" className='item'><h3>Create</h3></Link>
            </div>
            <div className="menu">
                <Link to="/streams/edit" className='item'><h3>Edit</h3></Link>
            </div>
            <div className="menu">
                <Link to="/streams/delete" className='item'><h3>Delete</h3></Link>
            </div>
            {/* <div className="menu">
                <GoogleAuth />
            </div> */}
        </div>
    );
}

export default Header;
