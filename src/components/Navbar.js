import React from 'react';
import Logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
        <div className='w-100 bg-primary shadow'>
            <div className='container-sm px-5'>
                <nav className="navbar navbar-expand-lg h-auto p-3 navbar-dark">
                    <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img className='mb-2' src={Logo} alt=""/>
                            </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a href='/' className="nav-link active"
                                       aria-current="page">Home</a>
                                </li>
                                <li className="nav-item">
                                        <a href="#about" className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                        <a href='#apply' className="nav-link">Apply</a>
                                </li>
                            </ul>

                            <a href="#contact">
                                <button className='btn btn-light rounded-pill px-4'>Contact Us</button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
