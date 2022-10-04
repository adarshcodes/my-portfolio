import React from "react";
import "./header.scss";

function Header({ modal }) {
	return (
		<div className="header">
			<div
				className={`header__logo ${
					modal ? "header__logo-active" : "header__logo"
				}`}
			>
				Adarsh<i class="fa-solid fa-circle"></i>
				<span className="header__outlet">
					Portfolio<i class="fa-light fa-seedling"></i>
				</span>
			</div>

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
