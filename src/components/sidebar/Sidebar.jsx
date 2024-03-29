import React from "react";
import "./sidebar.scss";

function Sidebar({ modal, setModal }) {
	return (
		<div className="sidebar">
			<button
				className={`ham-btn ${modal ? "ham-line" : null}`}
				onClick={() => setModal(!modal)}
			>
				{" "}
				<span></span>
			</button>

			<div className="menu-text">menu</div>

			<div className={`menu-holder ${modal ? "show-modal" : null}`}>
				<div className="menu-inside">
					<div className={`navigation-links ${modal ? "list-load" : null}`}>
						<a href="#none" data-text="HOME" id="home-link">
							HOME
						</a>
						<a href="#none" data-text="ABOUT" id="about-link">
							ABOUT
						</a>
						<a href="#none" data-text="SERVICES" id="services-link">
							SERVICES
						</a>
						<a href="#none" data-text="PORTFOLIO" id="portfolio-link">
							PORTFOLIO
						</a>
						<a href="#none" data-text="BLOG" id="blog-link">
							BLOG
						</a>
						<a href="#none" data-text="CONTACT" id="contact-link">
							CONTACT
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
