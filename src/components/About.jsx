import bitmoji from '../images/bitmoji.jpg';
import { useInView, animated } from '@react-spring/web';

const About = () => {
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
			name="about"
			className="px-4 py-32 m-10 mx-auto bg-gray-800 rounded-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40 "
		>
			<div className=" bg-slate-900">
				<section className="container grid grid-cols-1 mx-auto border rounded-md md:grid-cols-2">
					<div className="container p-2 border-2">
						<h1 className="sm:text-4xl text-4xl mb-4 pl-5 pb-3 text-slate-300 font-bold underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
							About Me
						</h1>
						<p className="mb-8 leading-relaxed text-left text-slate-400">
							Hello! My name is Adrian, and I like bringing things to life. When I graduated from
							college, I was having trouble figuring out what I wanted to do with my life. I
							received my Bachelor's degree only two years after graduating from high school. My
							interest in becoming a Frontend Engineer started on January 6, 2022.
						</p>
						<p className="mb-8 leading-relaxed text-left text-slate-200 ">
							Fast forward to December 30, 2022 I have been consisted on learning how to code and
							have graduated from Nucamp Coding Bootcamp. July 4th-November 26th 2022.
						</p>
						<p className="leading-relaxed text-left text-slate-400">
							Here are a few technolgies I've been working with recently:
						</p>
						<ul className="inline-block text-left uLstyle text-slate-400">
							<li className="triangleList">JavaScript (ES6)</li>
							<li className="triangleList">React</li>
							<li className="triangleList">TailWind CSS</li>
						</ul>
					</div>
					<div className="flex items-center justify-center p-2">
						<img
							src={bitmoji}
							className="border-4 border-blue-900 rounded-full skew-x-1 w-96 h-96"
						/>
					</div>
				</section>
			</div>
		</animated.div>
	);
};

export default About;
