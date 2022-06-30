import React from "react";
import ContactButton from "../components/contactButton/ContactButton";
import Header from "../components/header/Header";

import Navigation from "../components/nav/Navigation";

import "./home.styles.scss";

function Home() {
	return (
		<div className="main-container" id="main-container">
			<Navigation />
			<Header />
			{/* <h1 className="heading-primary name-heading">
				Adarsh <br />
				Pratap <br />
				Singh
			</h1> */}
			<ContactButton />
		</div>
	);
}

export default Home;
