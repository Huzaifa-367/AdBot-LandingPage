import React from "react";
import ImageOverview_thumb from "../assets/images/element/robot-1.png";
import { ImageOverview_subtitle, ImageOverview_title, ImageOverview_para1, ImageOverview_para2 } from "./utils/String";
function ImageOverview() {
	return (
		<>
			<section className="image-overview-section ptb-80">
				<div className="container">
                    <div className="row justify-content-center align-items-center mb-30-none">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="image-overview-content">
                                <span className="sub-title">
                                    {ImageOverview_subtitle}
                                </span>
                                <h2 className="title">
                                    {ImageOverview_title}
                                </h2>
                                <p>
                                    {ImageOverview_para1}
                                </p>
                                <p>
                                    {ImageOverview_para2}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="image-overview-thumb">
                                <img src={ImageOverview_thumb} alt="element" />
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default ImageOverview;