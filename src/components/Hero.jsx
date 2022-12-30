import space from '../images/space.jpg';
import Typed from 'react-typed';
import { FaLinkedinIn, FaCodepen, FaGithub } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className="relative top-0 bg-gray-800">
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
				<div className="relative max-w-2xl text-center sm:mx-auto sm:max-w-xl md:max-w-2xl">
					<h2 className="mb-6 tracking-wide text-md md:text-2xl text-emerald-400 sm:leading-none">
						Hi, my name is
					</h2>
					<h2 className="mb-6 text-4xl font-bold tracking-wide md:text-5xl text-slate-300 lg:text-7xl sm:leading-none">
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
				</div>
			</div>
			<svg viewBox="0 0 1440 320">
				<path
					fill="#0f172a"
					fill-opacity="1"
					d="M0,192L18.5,197.3C36.9,203,74,213,111,181.3C147.7,149,185,75,222,80C258.5,85,295,171,332,202.7C369.2,235,406,213,443,181.3C480,149,517,107,554,85.3C590.8,64,628,64,665,74.7C701.5,85,738,107,775,128C812.3,149,849,171,886,160C923.1,149,960,107,997,85.3C1033.8,64,1071,64,1108,58.7C1144.6,53,1182,43,1218,53.3C1255.4,64,1292,96,1329,138.7C1366.2,181,1403,235,1422,261.3L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
				></path>
			</svg>
		</div>
	);
};

export default Hero;
