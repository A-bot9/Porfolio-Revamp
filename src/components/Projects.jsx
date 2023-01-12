import React from 'react';
import { projects } from '../data/projectsData';
import { ImFire } from 'react-icons/im';

const Projects = () => {
	return (
		<section name="projects" className="my-8 text-gray-400 bg-slate-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<ImFire className="inline-block w-10 h-10 mx-auto mb-4 text-emerald-400" />
					<h1 className="mb-4 text-3xl sm:text-4xl title-font text-slate-300 font-bold underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
						Fire Apps I've Built
					</h1>
					<p className="mx-auto text-base leading-relaxed text-white lg:w-2/3">
						PRACTICE MAKES IMPROVEMENT...
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project) => (
						<a href={project.link} key={project.image} className="p-4 sm:w-1/2 w-100">
							<div className="relative flex ">
								<img
									alt="photos/svg"
									className="absolute inset-0 object-cover object-center w-full h-full border-2 border-emerald-400"
									src={project.image}
									target="_blank"
									rel="noreferrer"
								/>
								<div className="relative z-10 px-8 py-10 bg-gray-900 border-4 border-gray-800 opacity-0 w-120 h-60 hover:opacity-100">
									<h2 className="mb-1 text-sm font-medium tracking-widest text-green-400 title-font">
										{project.subtitle}
									</h2>
									<h1 className="mb-3 text-lg font-medium text-white title-font">
										{project.title}
									</h1>
									<p className="leading-relaxed">{project.description}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
			<div class="curve">
				<svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						fill="#1f2937"
						d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
						class="shape-fill"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default Projects;
