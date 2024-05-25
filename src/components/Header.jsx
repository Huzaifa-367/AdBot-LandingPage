import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/images/logo/logo.png";
import Download_thumb1 from "../assets/images/element/playstor-qr.png";
import Download_thumb2 from "../assets/images/element/appstore-qr.png";
import {Header_link1, Header_link2, Header_link3, Header_btn} from "./utils/String";
import { Android_link, Ios_link } from "./utils/Config";
function Header() {
    const [modal] = useState(1);


	return (
        <>
            <header className="header-section">
                <div className="header">
                    <div className="header-bottom-area">
                        <div className="container">
                            <div className="header-menu-content">
                                <nav className="navbar navbar-expand-lg p-0">
                                    <Link className="site-logo" to="/">
                                        <img src={Logo} alt="site-logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler ms-auto p-0"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <svg
                                            fill="#fff"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 50 50"
                                            width="30px"
                                            height="30px"
                                        >
                                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                                        </svg>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav main-menu ms-auto">
                                            <li>
                                                <Link smooth to="/">{Header_link1}</Link>
                                            </li>
                                            <li>
                                                <Link smooth to="#about">{Header_link2}</Link>
                                            </li>
                                            <li>
                                                <Link smooth to="#pricing">{Header_link3}</Link>
                                            </li>
                                        </ul>
                                        <div className="header-action">
                                            <Link to="#0" className="btn--base" data-bs-toggle="modal"
                                            data-bs-target="#downloadModal">
                                                {Header_btn}
                                            </Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="modal fade" id="downloadModal">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    {modal === 1 && (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Download App</h4>
                            </div>
                            <div className="modal-body">
                                <div className="download-wrapper">
                                    <Link to={Android_link} className="download-item">
                                        <div className="download-thumb">
                                            <img src={Download_thumb1} alt="element" />
                                        </div>
                                        <div className="download-content">
                                            <h5 className="title">Android App</h5>
                                        </div>
                                    </Link>
                                    <Link to={Ios_link} className="download-item">
                                        <div className="download-thumb">
                                            <img src={Download_thumb2} alt="element" />
                                        </div>
                                        <div className="download-content">
                                            <h5 className="title">iOS App</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
	);
}

export default Header;
