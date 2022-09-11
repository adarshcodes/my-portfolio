import React from "react";
import Sidebar from "../sidebar/Sidebar";

import "./navigation.scss";

function Navigation({ modal, setModal }) {
	return (
		<div className="navigation">
			<Sidebar modal={modal} setModal={setModal} />
		</div>
	);
}

export default Navigation;
