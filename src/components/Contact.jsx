import React from 'react';
import { useInView, animated } from '@react-spring/web';

const Contact = () => {
	const [ref, springs] = useInView(
		() => ({
			from: {
				opacity: 0,
				x: 100,
			},
			to: {
				opacity: 1,
				x: 0,
			},
		}),
		{
			rootMargin: '-40% 0%',
		}
	);
	return (
		<animated.div
			ref={ref}
			style={springs}
			className="px-4 py-16 m-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
		>
			<div className=" bg-slate-900">
				{/* Start of Grid */}
				<section className="container grid grid-cols-1 mx-auto border rounded-md md:grid-cols-2">
					{/* Start of LEFT side of Grid  */}
					<div className="flex items-center justify-center p-2">
						<div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
								Get in touch
							</h1>
							<p className="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-2xl dark:text-gray-400">
								Fill in the form to start a conversation
							</p>

							<div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									className="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M17.6567 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div className="w-40 ml-4 font-semibold tracking-wide text-md">United States</div>
							</div>

							<div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									className="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<div className="w-40 ml-4 font-semibold tracking-wide text-md">
									On Resume(my number)
								</div>
							</div>

							<div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									className="w-8 h-8 text-gray-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div className="w-40 ml-4 font-semibold tracking-wide text-md">
									On Resume(my email)
								</div>
							</div>
						</div>
					</div>
					{/* Start of RIGHT side of Grid */}
					<div className="flex items-center justify-center p-2">
						<div
							name="contact"
							className="container px-5 py-24 mx-auto bg-[#0f172a] flex justify-center md:justify-center items-center p-4"
						>
							<form
								method="POST"
								action="https://getform.io/f/2caf33d7-1d06-4c5b-9111-0fdcbaa50292"
								className="flex flex-col max-w-[400px] w-full"
							>
								<h1 className="inline-block text-4xl pl-5 text-slate-300 font-bold pb-3 underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
									Contact Me
								</h1>
								<div>
									<p className="py-4 text-gray-400">
										Submit the form below to shoot me an email...
									</p>
								</div>
								<input
									className="p-2 border rounded bg-slate-600 text-emerald-400 border-slate-300"
									type="text"
									placeholder="Name"
									name="name"
								/>
								<input
									className="p-2 my-4 border rounded bg-slate-600 text-emerald-400 border-slate-300"
									type="email"
									placeholder="Email"
									name="email"
								/>
								<textarea
									className="p-2 border rounded bg-slate-600 text-emerald-400 border-slate-300"
									name="message"
									rows="10"
									placeholder="Message"
								></textarea>
								<button className="px-4 py-2 mx-auto my-8 font-medium border-2 rounded text-emerald-400 bg-slate-800 border-emerald-400 hover:bg-emerald-900">
									Say Hello
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</animated.div>
	);
};

export default Contact;
