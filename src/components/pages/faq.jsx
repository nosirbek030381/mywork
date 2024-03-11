import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const FAQ = () => {
	return (
		<div>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Frequently Asked Questions</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ f.a.q
				</p>
			</div>

			<div className='flex  justify-center  space-x-20 mt-20 mb-10 '>
				<div className='w-[20%]'>
					<h1 className='font-semibold text-3xl'>Frequently Asked Questions</h1>
					<p className='mt-10 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repudiandae.
					</p>
					<p className='mt-5 text-gray-500'>admin@mail.com</p>
				</div>
				<div className='w-[30%]'>
					<h1 className='font-semibold text-lg'>Order Status</h1>
					<p className='mt-2 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora
						fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
					</p>
					<h1 className='font-semibold text-lg mt-5'>Shipping & Delivery</h1>
					<p className='mt-2 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora
						fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
					</p>
					<h1 className='font-semibold text-lg mt-5'>Payments</h1>
					<p className='mt-2 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora
						fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
					</p>
					<h1 className='font-semibold text-lg mt-5'>Returns & Exchanges</h1>
					<p className='mt-3 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora
						fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
					</p>
					<h1 className='font-semibold text-lg mt-5'>Privacy Policy</h1>
					<p className='mt-3 text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto, alias, tempora
						fuga quam eveniet neque excepturi aliquid. Eligendi, mollitia.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
