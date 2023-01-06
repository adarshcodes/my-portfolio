import React from "react";
import { Plus } from "react-feather";

import "./contact.styles.scss";

function ContactButton({ langSwitch, setLangSwitch, langData }) {
	return (
		<button className="contact-button">
			{langSwitch ? (
				<span>{langData.contactButton.hindi}</span>
			) : (
				<span>{langData.contactButton.english}</span>
			)}
			<Plus />
		</button>
	);
}

export default ContactButton;
