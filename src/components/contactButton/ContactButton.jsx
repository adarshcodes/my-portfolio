import React, { useState } from "react";
import { Plus } from "react-feather";

import "./contact.styles.scss";

function ContactButton() {
	return (
		<button className="contact-button">
			<span>Contact Me</span>
			<Plus />
		</button>
	);
}

export default ContactButton;
