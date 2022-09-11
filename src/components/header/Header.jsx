import React from "react";
import "./header.scss";

function Header({ modal }) {
	return (
		<div className="header">
			<span
				className={`header__logo ${
					modal ? "header__logo-active" : "header__logo"
				}`}
			>
				Adarsh
				{/* <i
					className={`fa-light fa-lightbulb-on ${
						modal
							? "fa-light fa-lightbulb-on rotate-bulb"
							: "fa-light fa-lightbulb-on"
					}`}
				></i> */}
				<i class="fa-solid fa-circle"></i>
			</span>

			<ul className="header__lang">
				<li>
					<a href="/" className="lang active-lang">
						En.
					</a>
				</li>
				<li>
					<a href="/" className="lang ">
						Hi.
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
