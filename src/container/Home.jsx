import React, { useState } from "react";
import ContactButton from "../components/contactButton/ContactButton";
import Header from "../components/header/Header";

import Navigation from "../components/nav/Navigation";
import Socialicons from "../components/socialicons/Socialicons";

import "./home.styles.scss";

function Home() {
	const [modal, setModal] = useState(false);

	return (
		<div className="main-container" id="main-container">
			<Navigation modal={modal} setModal={setModal} />
			<Header modal={modal} />
			{/* <h1 className="heading-primary name-heading">
				Adarsh <br />
				Pratap <br />
				Singh
			</h1> */}
			<Socialicons />
			<ContactButton />
		</div>
	);
}

export default Home;
