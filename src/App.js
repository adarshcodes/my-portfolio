// native imports
import React from "react";

// components imports
import Home from "./container/Home";

// style import
import "./assets/styles/base.styles.scss";

function App() {
	const [langSwitch, setLangSwitch] = React.useState(false);

	return (
		<div className="App">
			<Home langSwitch={langSwitch} setLangSwitch={setLangSwitch} />
		</div>
	);
}

export default App;
