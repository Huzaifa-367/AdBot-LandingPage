import React from "react";
import About_thumb from "../assets/images/element/robot-3.png";
import About_element from "../assets/images/element/frame.png";
import { About_subtitle, About_title, About_para } from "./utils/String";
function About() {
	return (
		<>
			<section className="about-section pt-80" id="about">
                <div className="about-element">
                    <img src={About_element} alt="element" />
                </div>
				<div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-12">
                            <div className="about-wrapper">
                                <div className="about-content">
                                    <span className="sub-title">
                                        {About_subtitle}
                                    </span>
                                    <h2 className="title">
                                        {About_title}
                                    </h2>
                                    <p>
                                        {About_para}
                                    </p>
                                </div>
                                <div className="about-thumb">
                                    <img src={About_thumb} alt="element" />
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default About;