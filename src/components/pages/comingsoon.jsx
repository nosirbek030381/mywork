import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

const ComingSoon = () => {
	return (
		<div className="bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*SHy_CBjvIQUheJXuxnFyaA.jpeg')] h-screen bg-cover bg-no-repeat ">
			<div className=''>
				<p className='text-center text-white text-lg font-normal pt-40'>
					We are working on something amazing
				</p>
				<h1 className='text-4xl text-white font-bold text-center'>Coming Soon</h1>
				<p className='flex justify-center items-center pt-14 space-x-6 text-white text-xl'>
					<FaFacebook className='cursor-pointer hover:text-fuchsia-300' />
					<FaTwitter className='cursor-pointer hover:text-fuchsia-300' />
					<FaLinkedin className='cursor-pointer hover:text-fuchsia-300' />
					<FaPinterest className='cursor-pointer hover:text-fuchsia-300' />
					<FaInstagram className='cursor-pointer hover:text-fuchsia-300' />
				</p>

				<p className='pt-10 text-white text-center'>Copyright © 2024. Designed & Developed </p>
			</div>
		</div>
	);
};

export default ComingSoon;
