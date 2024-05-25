import React from "react";
import { Logo_text } from "./utils/String";
function Terms() {
	return (
		<>
			<section className="terms-section ptb-80">
				<div className="container">
                    <div className="terms-area">
                        <div className="terms-wrapper">
                            <div className="terms-content">
                                <h3 className="title text-center">Terms & Conditions for {Logo_text}</h3>
                                <p>At {Logo_text}, we understand the importance of terms and are committed to protecting the personal information of our users. We believe in being transparent about our data collection and usage practices, and this Terms & Conditions outlines what information we collect, how we use it, and who we share it with.</p>
                            </div>
                            <div className="terms-content">
                                <h4 className="title">Information Collection:</h4>
                                <p>{Logo_text} collects the following types of personal information from its users:</p>
                                <ul className="terms-list">
                                    <li>Name</li>
                                    <li>Phone Number</li>
                                    <li>Profile image</li>
                                </ul>
                                <p>The information is collected when the user creates an account with {Logo_text} or updates their profile information. The profile image is optional, and the user has the choice of whether or not to upload it.</p>
                            </div>
                            <div className="terms-content">
                                <h4 className="title">Information Use:</h4>
                                <p>{Logo_text} uses the personal information collected from its users for the following purposes:</p>
                                <ul className="terms-list">
                                    <li>To provide a personalized experience for the user</li>
                                    <li>To send notifications and updates about the app</li>
                                    <li>To improve the app and its features based on user feedback and usage patterns</li>
                                    <li>To comply with legal obligations and to resolve disputes</li>
                                </ul>
                            </div>
                            <div className="terms-content">
                                <h4 className="title">Information Sharing:</h4>
                                <p>{Logo_text} does not share any of the personal information collected from its users with third parties, except in the following cases:</p>
                                <ul className="terms-list">
                                    <li>When required by law</li>
                                    <li>To protect the rights and safety of {Logo_text} and its users</li>
                                    <li>To enforce our terms of service</li>
                                </ul>
                            </div>
                            <div className="terms-content">
                                <h4 className="title">Data Security:</h4>
                                <p>{Logo_text} takes the security of its users' personal information seriously and has implemented appropriate technical and organizational measures to protect it. However, please note that no data transmission or storage can be guaranteed to be 100% secure.</p>
                                <h5 className="title">Contact Information:</h5>
                                <p>If you have any questions or concerns regarding {Logo_text}'s Terms & Conditions or the information we collect, you can contact us at:</p>
                                <ul className="terms-list">
                                    <li>Email: <span>spport@{Logo_text}.com</span></li>
                                </ul>
                            </div>
                            <div className="terms-content">
                                <h4 className="title">Changes to Terms & Conditions:</h4>
                                <p>{Logo_text} reserves the right to modify this Terms & Conditions at any time. We will notify our users of any significant changes by posting a notice on our app or website and by updating the "Last Updated" date at the top of this policy. We encourage our users to regularly review this Terms & Conditions to stay informed about how we are protecting their personal information.</p>
                                <p>This Terms & Conditions was last updated on 2023-03-25.</p>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
		</>
	);
}

export default Terms;