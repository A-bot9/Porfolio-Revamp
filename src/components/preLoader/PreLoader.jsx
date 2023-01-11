import React from 'react';
import { GooeyCircleLoader } from 'react-loaders-kit';
import Typed from 'react-typed';

function PreLoader() {
	const preloaderProps = {
		loading: true,
		size: 275,
		duration: 2,
		colors: ['#4ade80', '#94a3b8', '#4b5563'],
	};

	return (
		<div className="flex items-center justify-center h-screen preloader text-emerald-400">
			<GooeyCircleLoader {...preloaderProps} />
			<Typed className="loader-text" strings={['Loading...']} typeSpeed={60} backSpeed={0} />
		</div>
	);
}

export default PreLoader;
