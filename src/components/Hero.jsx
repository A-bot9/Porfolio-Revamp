// import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Typed from 'react-typed';
import { FaLinkedinIn, FaCodepen, FaGithub } from 'react-icons/fa';
import Navbar from './Navbar';
import Resume from '../assets/Resume.pdf';
import { ScrollToTop } from './scroll/ScrollToTop';

const Hero = () => {
	const [props, api] = useSpring(
		() => ({
			from: { opacity: 0 },
			to: { opacity: 1 },
		}),
		[]
	);

	return (
		<>
			<div className="relative top-0 h-screen bg-gray-800">
				<Navbar />
				<div className="absolute inset-x-0 ">
					<svg viewBox="0 0 1000 320">
						<path
							fill="#0f172a"
							fill-opacity="1"
							d="M0,32L21.8,74.7C43.6,117,87,203,131,208C174.5,213,218,139,262,128C305.5,117,349,171,393,176C436.4,181,480,139,524,106.7C567.3,75,611,53,655,80C698.2,107,742,181,785,181.3C829.1,181,873,107,916,74.7C960,43,1004,53,1047,48C1090.9,43,1135,21,1178,37.3C1221.8,53,1265,107,1309,149.3C1352.7,192,1396,224,1418,240L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
						></path>
					</svg>
				</div>

				<div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
					<div className="relative max-w-2xl text-center sm:mx-auto sm:max-w-xl md:max-w-2xl ">
						<animated.h2
							style={props}
							className="mb-6 tracking-wide text-md md:text-2xl text-emerald-400 sm:leading-none"
						>
							Hi, my name is
						</animated.h2>
						<h2 className="mb-6 text-4xl font-bold tracking-wide md:text-5xl text-slate-300 lg:text-8xl sm:leading-none">
							Adrian Leal.
						</h2>
						<p className="mb-6 text-xl text-slate-500 md:text-3xl lg:text-5xl">
							I
							<Typed
								className="pl-2 pr-1 text-xl font-bold text-emerald-400 md:text-3xl lg:text-5xl lg:pl-3 lg:pr-2"
								strings={['code', 'build']}
								typeSpeed={120}
								backSpeed={140}
								loop
							/>
							things into reality.
						</p>

						<p className="max-w-md mx-auto mb-10 text-lg tracking-wide lg:text-3xl text-slate-300 md:mb-16">
							Stay disciplined. Be yourself. <br />
							Keep learning.
						</p>
						<ul className="flex self-center justify-center mt-6">
							<li className="p-1 px-4 text-2xl md:text-4xl coolLists">
								<a href="https://www.linkedin.com/in/adrian9leal/" target="_blank">
									<FaLinkedinIn />
								</a>
							</li>
							<li className="p-1 px-4 text-2xl md:text-4xl coolLists">
								<a href="https://codepen.io/a-bot9" target="_blank">
									<FaCodepen />
								</a>
							</li>
							<li className="p-1 px-4 text-2xl md:text-4xl coolLists">
								<a href="https://github.com/A-bot9" target="_blank">
									<FaGithub />
								</a>
							</li>
						</ul>
						<div>
							<a
								href={Resume}
								target="_blank"
								rel="noreferrer"
								className="relative inline-flex items-center justify-start inline-block p-2 px-2 m-3 overflow-hidden font-bold rounded-md group md:hidden"
							>
								<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-slate-200 opacity-[3%]"></span>
								<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
								<span className="relative w-full text-left transition-colors duration-200 ease-in-out text-slate-200 group-hover:text-gray-900">
									Resume
								</span>
								<span className="absolute inset-0 border-2 rounded-md border-slate-200"></span>
							</a>
						</div>
					</div>
				</div>

				<div class="triangleSVG">
					<svg
						data-name="Layer 1"
						fill="#0f172a"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
							class="shape-fill"
						></path>
					</svg>
				</div>
			</div>
			<ScrollToTop />
		</>
	);
};

export default Hero;
