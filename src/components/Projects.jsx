import React from 'react';
import { projects } from '../data/projectsData';
import { BsCodeSlash } from 'react-icons/bs';

const Projects = () => {
	return (
		<section id="projects" className="text-gray-400 bg-slate-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<BsCodeSlash className="inline-block w-10 mx-auto mb-4" />
					<h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
						Things I've built..
					</h1>
					<p className="mx-auto text-base leading-relaxed lg:w-2/3">
						PRACTICE MAKES IMPROVEMENT
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects.map((project) => (
						<a href={project.link} key={project.image} className="p-4 sm:w-1/2 w-100">
							<div className="relative flex">
								<img
									alt="photo/SVG"
									className="absolute inset-0 object-cover object-center w-full h-full"
									src={project.image}
								/>
								<div className="relative z-10 w-full px-8 py-10 bg-gray-900 border-4 border-gray-800 opacity-0 hover:opacity-100">
									<h2 className="mb-1 text-sm font-medium tracking-widest text-emerald-400 title-font">
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
		</section>
	);
};

export default Projects;
