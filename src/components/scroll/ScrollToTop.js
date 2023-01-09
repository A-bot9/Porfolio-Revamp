import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 2200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="fixed bottom-28 right-4">
			{isVisible && (
				<button
					className="inline-flex items-center p-3 text-black transition-opacity rounded-full shadow-sm bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
					type="button"
					onClick={scrollToTop}
				>
					<BiArrowFromBottom className="w-6 h-6" aria-hidden="true" />
				</button>
			)}
		</div>
	);
};

{
	/* <div className="fixed bottom-28 right-4">
			<button
				type="button"
				onClick={scrollToTop}
				className={classNames(
					isVisible ? 'opacity-100' : 'opacity-0',
					'inline-flex items-center p-3 rounded-full shadow-sm text-black bg-emerald-400 transition-opacity hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
				)}
			>
				<BiArrowFromBottom className="w-6 h-6" aria-hidden="true" />
			</button>
		</div> */
}
