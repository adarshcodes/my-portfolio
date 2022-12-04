import React from "react";
import { Plus } from "react-feather";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./contact.styles.scss";

function ContactButton({ langSwitch, setLangSwitch }) {
	const [lang, setLang] = React.useState({
		hin: "नमस्ते कहे!",
		eng: "Say Hi!",
	});

	return (
		<button className="contact-button">
			<span>{langSwitch ? lang.hin : lang.eng}</span>
			<Plus />
		</button>
	);
}

export default ContactButton;
