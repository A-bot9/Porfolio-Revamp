import React, { useState, useEffect } from 'react';
import PreLoader from './components/preLoader/PreLoader';
import AllComponents from './allComponents/AllComponents';
function App() {
	const [preloaded, setpreLoaded] = useState(false);

	//   the useEffect will run on the first rendering of the App component
	//   after two seconds (about how long it takes for the data to load)
	//   the loaded state will become true
	useEffect(() => {
		let timer = setTimeout(() => setpreLoaded(true), 10000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<div>
			{/* using a ternary operator to determine which component to display
    based on the loaded state. If loaded is false the Loader is rendered */}
			{!preloaded ? <PreLoader /> : <AllComponents />}
		</div>
	);
}

export default App;
