import React from "react";
import { Link } from "react-router-dom";
import { PlanLeft_subtitle, PlanLeft_title, PlanLeft_para, PlanFree_subtitle, PlanPremium_subtitle, Plan_btn } from "./utils/String";
import { TextFree_limit, TextPremium_limit, ImageFree_limit, ImagePremium_limit, Free_amount, Premium_amount, Free, Premium } from "./utils/Config";
function Pricing() {
	return (
		<>
			<section className="pricing-section ptb-80" id="pricing">
				<div className="container">
                    <div className="row justify-content-center align-items-center mb-30-none">
                        <div className="col-xl-5 col-lg-4 mb-30">
                            <div className="pricing-left-area">
                                <div className="pricing-left-content">
                                    <span className="sub-title">
                                        {PlanLeft_subtitle}
                                    </span>
                                    <h2 className="title">
                                        {PlanLeft_title}
                                    </h2>
                                    <p>
                                        {PlanLeft_para}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 mb-30">
                            <div className="row justify-content-center mb-30-none">
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="pricing-item">
                                        <div className="plan-icon">
                                            <Free />
                                        </div>
                                        <div className="plan-content">
                                            <span className="sub-title">
                                                {PlanFree_subtitle}
                                            </span>
                                            <h2 className="amount">
                                                {Free_amount}
                                            </h2>
                                            <p>
                                                {TextFree_limit}
                                            </p>
                                            <p>
                                                {ImageFree_limit}
                                            </p>
                                            <div className="plan-btn">
                                                <Link to="#0" className="btn--base w-100" data-bs-toggle="modal"
                                                    data-bs-target="#downloadModal">
                                                        {Plan_btn}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="pricing-item">
                                        <div className="plan-icon">
                                            <Premium />
                                        </div>
                                        <div className="plan-content">
                                            <span className="sub-title">
                                                {PlanPremium_subtitle}
                                            </span>
                                            <h2 className="amount">
                                                {Premium_amount}
                                            </h2>
                                            <p>
                                                {TextPremium_limit}
                                            </p>
                                            <p>
                                                {ImagePremium_limit}
                                            </p>
                                            <div className="plan-btn">
                                                <Link to="#0" className="btn--base w-100" data-bs-toggle="modal"
                                                    data-bs-target="#downloadModal">
                                                        {Plan_btn}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default Pricing;