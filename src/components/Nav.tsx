import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props: { nama: string }) => {

    const logout = async ()=> {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            credentials: 'include',
        });
    } 

    let menu;

    if (props.nama === '') {

        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link active" aria-current="page">Register</Link>
                </li>
            </ul>
        ) 
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" aria-current="page" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Home</Link>

                    <div>

                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Nav;