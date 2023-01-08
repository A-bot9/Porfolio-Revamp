import React from 'react';
import { FaLinkedinIn, FaCodepen } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
			<span className="text-sm text-gray-500  sm:text-center dark:text-gray-400">
				© 2023. <a className=" text-emerald-400">Adrian Leal</a>. All Rights Reserved.
			</span>
			<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
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
		</footer>
	);
};

export default Footer;
