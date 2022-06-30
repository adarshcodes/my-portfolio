import React from "react";
import "./header.scss";

function Header() {
	return (
		<div className="header">
			<span className="header__logo">
				Adarsh <i class="fa-solid fa-circle"></i>
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
