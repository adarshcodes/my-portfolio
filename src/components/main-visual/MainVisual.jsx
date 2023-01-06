import React from "react";
import "./mainVisual.styles.scss";
import ContactButton from "../contactButton/ContactButton";

const MainVisual = ({ langSwitch, setLangSwitch, langData }) => {
	return (
		<div className="main-visual">
			This is heading
			<ContactButton
				langData={langData}
				langSwitch={langSwitch}
				setLangSwitch={setLangSwitch}
			/>
		</div>
	);
};

export default MainVisual;
