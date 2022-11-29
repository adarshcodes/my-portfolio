import React from "react";
import "./mainVisual.styles.scss";
import ContactButton from "../contactButton/ContactButton";

const MainVisual = ({ langSwitch, setLangSwitch }) => {
	return (
		<div className="main-visual">
			This is heading
			<ContactButton langSwitch={langSwitch} setLangSwitch={setLangSwitch} />
		</div>
	);
};

export default MainVisual;
