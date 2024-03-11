import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import team from '../../assets/avater-1.jpg';
import img from '../../assets/awards-logo.png';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const About = () => {
	const [showVideo, setShowVideo] = useState(false);

	const handlePlayClick = () => {
		setShowVideo(true);
	};

	return (
		<div>
			<Navbar />
			<div className='w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>About Us</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ about
				</p>
			</div>

			<div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
				<div className='flex flex-col lg:flex-row justify-between gap-8'>
					<div className='w-full lg:w-8/12 '>
						<img
							className='w-full h-full'
							src='https://i.ibb.co/FhgPJt8/Rectangle-116.png'
							alt='A group of People'
						/>
					</div>

					<div className='w-full lg:w-5/12 flex flex-col justify-center'>
						<h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>
							About Us
						</h1>
						<p className='font-normal text-base leading-6 text-gray-600 '>
							It is a long established fact that a reader will be distracted by the readable content
							of a page when looking at its layout. The point of using Lorem Ipsum.In the first
							place we have granted to God, and by this our present charter confirmed for us and our
							heirs forever that the English Church shall be free, and shall have her rights entire,
							and her liberties inviolate; and we will that it be thus observed; which is apparent
							from
						</p>
						<div className='mt-5 transition duration-200'>
							<button className='border p-3 bg-black hover:bg-white text-white hover:text-black rounded'>
								Download company profile
							</button>
						</div>
					</div>
				</div>
				<div className='mt-16 flex space-x-8 justify-around'>
					<img src={img} alt='Award' />
					<img src={img} alt='Award' />
					<img src={img} alt='Award' />
					<img src={img} alt='Award' />
				</div>
				<div className='mt-24 '>
					<h1 className='text-4xl text-center'>Team Members</h1>
					<div className='flex justify-around flex-col md:flex-row space-y-10 md:space-y-0 mt-10'>
						<p className='flex justify-center items-center flex-col text-lg font-normal'>
							<img src={team} alt='' className='rounded-full' />
							Jonathon Andrew
							<p className='text-gray-500'>Founder</p>
						</p>
						<p className='flex justify-center items-center flex-col text-lg font-normal'>
							<img src={team} alt='' className='rounded-full' />
							Adipisci Velit
							<p className='text-gray-500'>Developer</p>
						</p>
						<p className='flex justify-center items-center flex-col text-lg font-normal'>
							<img src={team} alt='' className='rounded-full' />
							John Fexit
							<p className='text-gray-500'>Developer</p>
						</p>
						<p className='flex justify-center items-center flex-col text-lg font-normal'>
							<img src={team} alt='' className='rounded-full' />
							John Fexit
							<p className='text-gray-500'>Founder</p>
						</p>
					</div>
				</div>

				<div className='flex justify-center items-center container mt-24 modalabout w-full relative'>
					<div className='p-8 text-center rounded-lg'>
						<h1 className='text-3xl font-bold mb-4'>Video Presentation</h1>
						<button
							onClick={handlePlayClick}
							className='text-6xl text-black hover:text-gray-800 focus:outline-none'
						>
							<FaPlayCircle />
						</button>
					</div>
				</div>

				{showVideo && (
					<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center flex-col space-x-5'>
						<button
							onClick={() => setShowVideo(false)}
							className='text-gray-400 hover:text-white text-6xl focus:outline-none mb-5'
						>
							<IoMdCloseCircle />
						</button>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/qcJ2hx7gpEk?si=C9EvLDGxr4M8dqv2'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default About;
