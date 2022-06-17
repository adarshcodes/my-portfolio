import React from "react";
import "./sidebar.scss";

function Sidebar() {
	return (
		<div className="sidebar">
			<button className="ham-btn">
				<span></span>
			</button>

			<div className="menu-holder">
				<div className="menu-inside">
					<div class="navigation-links">
						<a href="none" data-text="HOME" id="home-link">
							HOME
						</a>
						<a href="none" data-text="ABOUT" id="about-link">
							ABOUT
						</a>
						<a href="none" data-text="BLOG" id="blog-link">
							BLOG
						</a>
						<a href="none" data-text="PORTFOLIO" id="portfolio-link">
							PORTFOLIO
						</a>
						<a href="none" data-text="CONTACT" id="contact-link">
							CONTACT
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
