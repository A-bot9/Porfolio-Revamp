import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import logoAL from '../images/LOGO.png';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const refreshPage = () => {
		window.location.reload(true);
	};
	return (
		<nav className="shadow bg-slate-900">
			<div className="flex items-center justify-between max-w-4xl px-6 py-4 mx-auto md:px-4 md:flex">
				<img
					src={logoAL}
					className="h-10 border-2 rounded-full cursor-pointer lg:h-12 border-emerald-400"
					onClick={refreshPage}
				/>
				<div>
					<ul className="hidden md:flex">
						<li className="px-2 lg:text-xl coolLists">
							<Link to="about" smooth={true} duration={500}>
								About
							</Link>
						</li>
						<li className="px-2 lg:text-xl coolLists">
							<Link to="projects" smooth={true} duration={500}>
								Projects
							</Link>
						</li>
						<li className="px-2 lg:text-xl coolLists">
							<Link to="contact" smooth={true} duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<a
						href={Resume}
						target="_blank"
						rel="noreferrer"
						className="relative items-center justify-start hidden p-1 px-2 overflow-hidden font-bold rounded-md group md:flex"
					>
						<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-slate-200 opacity-[3%]"></span>
						<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-slate-200 group-hover:-translate-x-8"></span>
						<span className="relative w-full text-left transition-colors duration-200 ease-in-out text-slate-200 group-hover:text-gray-900">
							Resume
						</span>
						<span className="absolute inset-0 border-2 rounded-md border-slate-200"></span>
					</a>
				</div>

				{/* Mobile Menu */}

				<div onClick={handleToggle} className="block md:hidden text-slate-400 ">
					{navbarOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
				</div>
				<ul
					className={
						navbarOpen
							? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-slate-800 ease-in-out duration-500 md:hidden z-10'
							: 'ease-in-out duration-500 fixed left-[-100%] md:hidden '
					}
				>
					<img
						className=" text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
						src={logoAL}
					/>

					<li className="p-4 border-b border-slate-600 coolLists">
						<Link onClick={handleToggle} to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>

					<li className="p-4 border-b border-slate-600 coolLists">
						<Link onClick={handleToggle} to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li className="p-4 border-b border-slate-600 coolLists">
						<Link onClick={handleToggle} to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
					<div>
						<a
							href={Resume}
							target="_blank"
							rel="noreferrer"
							className="relative inline-flex items-center justify-start inline-block p-2 px-2 m-3 overflow-hidden font-bold rounded-md group "
						>
							<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-slate-200 opacity-[3%]"></span>
							<span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
							<span className="relative w-full text-left transition-colors duration-200 ease-in-out text-slate-200 group-hover:text-gray-900">
								Resume
							</span>
							<span className="absolute inset-0 border-2 rounded-md border-slate-200"></span>
						</a>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
