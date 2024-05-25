import React from "react";
import TextOverview_thumb from "../assets/images/element/robot-2.png";
import TextOverview_icon from "../assets/images/element/clipboard.png";
import { TextOverview_subtitle, TextOverview_title, TextOverview_para1, TextOverview_para2 } from "./utils/String";
function TextOverview() {
	return (
		<>
			<section className="text-overview-section ptb-80">
				<div className="container">
                    <div className="row justify-content-center align-items-center mb-30-none">
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="text-overview-thumb">
                                <img src={TextOverview_thumb} alt="element" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="text-overview-content">
                                <div className="text-overview-icon">
                                    <img src={TextOverview_icon} alt="element" />
                                </div>
                                <span className="sub-title">
                                    {TextOverview_subtitle}
                                </span>
                                <h2 className="title">
                                    {TextOverview_title}
                                </h2>
                                <p>
                                    {TextOverview_para1}
                                </p>
                                <p>
                                    {TextOverview_para2}
                                </p>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default TextOverview;