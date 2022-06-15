import React from "react";
import ContactButton from "../components/contactButton/ContactButton";

import "./home.styles.scss";

function Home() {
	return (
		<div className="main-container" id="main-container">
			<h1 className="heading-primary name-heading">
				Blue <br />
				Blang <br />
				Studio
			</h1>

			<ContactButton />
		</div>
	);
}

export default Home;
