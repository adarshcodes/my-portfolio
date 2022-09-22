import React, { useState } from "react";
import Header from "../components/header/Header";

import Navigation from "../components/nav/Navigation";
import Socialicons from "../components/socialicons/Socialicons";
import MainVisual from "../components/main-visual/MainVisual";

import "./home.styles.scss";

function Home() {
	const [modal, setModal] = useState(false);

	return (
		<div className="main-container" id="main-container">
			<Navigation modal={modal} setModal={setModal} />
			<Header modal={modal} />
			<Socialicons />
			<MainVisual />
		</div>
	);
}

export default Home;
