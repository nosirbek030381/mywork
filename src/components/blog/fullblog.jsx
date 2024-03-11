import React from 'react';
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const FullBlog = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />
			<div className='w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Blog</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ blog
				</p>
			</div>

			{/* Full width blog */}
			<div className='flex justify-center items-center mt-24 mb-10 flex-col'>
				<img
					src={'https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'}
					alt=''
					className='w-[60%] rounded-md shadow-lg h-[60vh]'
				/>
				<div className='container mt-10 w-[60%] space-y-8'>
					<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
					<p className='flex items-center space-x-6 cursor-pointer'>
						<FaCalendar className='mx-1' />
						20, MAR 2017
						<span className='flex items-center space-x-3 text-gray-500'>
							<FaUser className='mx-1' /> POSTED BY ADMIN
						</span>
						<span className='flex space-x-2 items-center cursor-pointer text-gray-500'>
							<IoIosPricetag /> <p className='hover:text-gray-900'>LIFESTYLE</p>,{' '}
							<p className='hover:text-gray-900'>TRAVEL</p>,{' '}
							<p className='hover:text-gray-900'>FASHION</p>
						</span>
						<span className='flex space-x-2 items-center'>
							<FaComment className='mx-2' /> 4 COMMENTS
						</span>
					</p>
					<p className=''>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat sunt
						ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias maiores
						itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit repellendus
						eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure odio, veritatis
						similique enim explicabo eum?
					</p>
					<button
						onClick={() => navigate('/blog')}
						className='border bg-black hover:bg-white text-white hover:text-black p-3 rounded'
					>
						READ MORE
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center mt-24 mb-10 flex-col'>
				<img
					src={'https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'}
					alt=''
					className='w-[60%] rounded-md shadow-lg h-[60vh]'
				/>
				<div className='container mt-10 w-[60%] space-y-8'>
					<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
					<p className='flex items-center space-x-6 cursor-pointer'>
						<FaCalendar className='mx-1' />
						20, MAR 2017
						<span className='flex items-center space-x-3 text-gray-500'>
							<FaUser className='mx-1' /> POSTED BY ADMIN
						</span>
						<span className='flex space-x-2 items-center cursor-pointer text-gray-500'>
							<IoIosPricetag /> <p className='hover:text-gray-900'>LIFESTYLE</p>,{' '}
							<p className='hover:text-gray-900'>TRAVEL</p>,{' '}
							<p className='hover:text-gray-900'>FASHION</p>
						</span>
						<span className='flex space-x-2 items-center'>
							<FaComment className='mx-2' /> 4 COMMENTS
						</span>
					</p>
					<p className=''>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat sunt
						ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias maiores
						itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit repellendus
						eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure odio, veritatis
						similique enim explicabo eum?
					</p>
					<button
						onClick={() => navigate('/blog')}
						className='border bg-black hover:bg-white text-white hover:text-black p-3 rounded'
					>
						READ MORE
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center mt-24 mb-10 flex-col'>
				<img
					src={'https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'}
					alt=''
					className='w-[60%] rounded-md shadow-lg h-[60vh]'
				/>
				<div className='container mt-10 w-[60%] space-y-8'>
					<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
					<p className='flex items-center space-x-6 cursor-pointer'>
						<FaCalendar className='mx-1' />
						20, MAR 2017
						<span className='flex items-center space-x-3 text-gray-500'>
							<FaUser className='mx-1' /> POSTED BY ADMIN
						</span>
						<span className='flex space-x-2 items-center cursor-pointer text-gray-500'>
							<IoIosPricetag /> <p className='hover:text-gray-900'>LIFESTYLE</p>,{' '}
							<p className='hover:text-gray-900'>TRAVEL</p>,{' '}
							<p className='hover:text-gray-900'>FASHION</p>
						</span>
						<span className='flex space-x-2 items-center'>
							<FaComment className='mx-2' /> 4 COMMENTS
						</span>
					</p>
					<p className=''>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat sunt
						ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias maiores
						itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit repellendus
						eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure odio, veritatis
						similique enim explicabo eum?
					</p>
					<button
						onClick={() => navigate('/blog')}
						className='border bg-black hover:bg-white text-white hover:text-black p-3 rounded'
					>
						READ MORE
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default FullBlog;
