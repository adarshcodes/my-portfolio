import { logDOM } from "@testing-library/react";
import React from "react";
import "./header.scss";

function Header({ modal, langSwitch, setLangSwitch, langData }) {
	const [activeLang, setActiveLang] = React.useState(false);

	return (
		<div className="header">
			<div
				className={`header__logo ${
					modal ? "header__logo-active" : "header__logo"
				}`}
			>
				{langSwitch ? langData.header.name.hindi : langData.header.name.english}
				<i class="fa-solid fa-circle"></i>
				<span className="header__outlet">
					{langSwitch
						? langData.header.portfolio.hindi
						: langData.header.portfolio.english}
					<i class="fa-light fa-seedling"></i>
				</span>
			</div>

			<ul className="header__lang">
				<li
					onClick={() => {
						setLangSwitch(false);
						setActiveLang(false);
					}}
				>
					<p className={`lang ${!activeLang ? "active-lang" : null}`}>En.</p>
				</li>
				<li
					onClick={() => {
						setLangSwitch(true);
						setActiveLang(true);
					}}
				>
					<p className={`lang ${activeLang ? "active-lang" : null}`}>Hi.</p>
				</li>
			</ul>
		</div>
	);
}

export default Header;
