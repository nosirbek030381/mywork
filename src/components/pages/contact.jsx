import React from 'react';
import { FaHome, FaInternetExplorer, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className='w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Contact</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						<FaHome className='inline-block mr-1' />
						Home
					</Link>{' '}
					/ contact
				</p>
			</div>

			<div className='container mx-auto mt-14 mb-10 flex flex-col lg:flex-row justify-center items-center lg:items-center'>
				<form className='max-w-lg w-full mb-8 lg:mb-0 lg:mr-8'>
					<div className='grid gap-6 '>
						<input
							type='text'
							placeholder='Full name'
							className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						/>
						<input
							type='text'
							placeholder='Email'
							className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						/>
						<input
							type='text'
							placeholder='Subject'
							className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						/>
						<textarea
							placeholder='Message'
							className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						/>
					</div>
					<button className='bg-[#333] text-white py-3.5 rounded-md w-full mt-6'>Send</button>
				</form>

				<div className='w-full lg:w-[30%]'>
					<div>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52814222.19796557!2d-161.48577725595152!3d36.105082377304335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1710076484245!5m2!1sen!2s'
							width='100%'
							height='250'
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
							title='Google Maps'
							className='mb-8 lg:mb-0'
						></iframe>
					</div>
					<div className='flex flex-col space-y-2  mt-5'>
						<p className='flex items-center'>
							<FaHome className='mr-2' />
							Khaja Road, Bayzid,
						</p>
						<p className='flex items-center'>
							<FaPhone className='mr-2' />
							Phone: +880-31-000-000
						</p>
						<p className='flex items-center'>
							<FaInternetExplorer className='mr-2' />
							Fax: +880-31-000-000
						</p>
						<p className='flex items-center'>
							<FaMailBulk className='mr-2' />
							Email: hello@example.com
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
