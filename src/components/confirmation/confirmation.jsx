import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Confirmation = () => {
	return (
		<>
			<Navbar />
			<div className=' mt-14 mb-14  flex flex-col justify-center items-center'>
				<div className='bg-white rounded-lg p-8 max-w-md w-full flex justify-center items-center flex-col'>
					<FaCheckCircle className='text-6xl text-green-600 mt-2 mb-6' />
					<h1 className='text-3xl font-bold mb-4'>Thank you for your order!</h1>
					<p className='text-lg mb-4'>Your order has been successfully placed.</p>

					<div className='mt-8'>
						<button className='bg-black text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400'>
							Continue Shopping
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Confirmation;
