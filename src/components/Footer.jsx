import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png";
import { Footer_link1, Footer_link2, Footer_link3, Copyright_link } from "./utils/String";
import { Facebook, Instagram, Twitter, Github, Dribble } from "./utils/Config";
function Footer() {
	return (
		<>
			<footer className="footer-section pt-80">
				<div className="container">
                    <div className="footer-top">
                        <div className="row justify-content-center mb-30-none">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link className="site-logo" to="/">
                                            <img src={Logo} alt="site-logo" />
                                        </Link>
                                    </div>
                                    <p className="logo-text">Web design encompasses many differ ent skills and discipline in the product ion and maintenance of websites.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <h3 className="title">Contact Info</h3>
                                    <ul className="footer-list">
                                        <li><span>Address:</span> 2511 Skips Lane, Phoenix, Arizo, 85012, United States.</li>
                                        <li><span>Phone:</span> +1 928 563 8914</li>
                                        <li><span>Email:</span> support@adbot.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <h3 className="title">Quick Links</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <Link to="/privacy">
                                                {Footer_link1}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms">
                                                {Footer_link2}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/refund">
                                                {Footer_link3}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <h3 className="title">Usefull Social</h3>
                                    <p>Heaven fruitful doesn’t over lesser day appear creeping seasons so behold bearing days open.</p>
                                    <ul className="footer-social">
                                        <li>
                                            <Link to="#">
                                                <Facebook /> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <Instagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <Twitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <Github />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <Dribble />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-wrapper">
                            <div className="copyright">
                                Copyright &copy; 2023. All Rights Reserved by <Link to="/">{Copyright_link}</Link>
                            </div>
                        </div>
                    </div>
				</div>
			</footer>
		</>
	);
}

export default Footer;