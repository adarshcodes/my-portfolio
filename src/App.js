// native imports
import React from "react";

// components imports
import Home from "./container/Home";
import langData from "./langData.json";

// style import
import "./assets/styles/base.styles.scss";

function App() {
	const [languages] = React.useState(langData);
	const [langSwitch, setLangSwitch] = React.useState(false);

	return (
		<div className="App">
			<Home
				langSwitch={langSwitch}
				langData={languages}
				setLangSwitch={setLangSwitch}
			/>
		</div>
	);
}

export default App;
