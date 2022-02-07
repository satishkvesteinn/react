import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-fluid bg-dark bg-gradient">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
                            <div className="container-fluid">
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <Link className="navbar-brand text-white" aria-current="page" to="/">Satish Kumar</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            {/* <a  href="#">Home</a> */}
                                            <Link exact className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-white" aria-current="page" to="/about">About</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-white" aria-current="page" to="/contact">Contact</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link text-white" aria-current="page" to="/Service">Service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;