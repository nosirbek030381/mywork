import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Buttons = () => {
	return (
		<div>
			<Navbar />
			<h1 className='text-4xl text-center mt-40'>Button styles </h1>
			<div className='mt-16 flex justify-center items-center mx-auto mb-16'>
				<button className='border bg-black text-white p-5'>Default button</button>
				<button className='border bg-black text-white p-4'>Default button</button>
				<button className='border bg-black text-white p-3'>Default button</button>
				<button className='border bg-black text-white p-2'>Default button</button>
				<button className='border bg-black text-white p-1'>Default button</button>
			</div>
			<div className=' flex justify-center items-center mx-auto mb-16'>
				<button className='border bg-black text-white rounded-lg p-5'>Default button</button>
				<button className='border bg-black text-white rounded-lg p-4'>Default button</button>
				<button className='border bg-black text-white rounded-lg p-3'>Default button</button>
				<button className='border bg-black text-white rounded-lg p-2'>Default button</button>
				<button className='border bg-black text-white rounded-lg p-1'>Default button</button>
			</div>
			<div className=' flex justify-center items-center mx-auto mb-16'>
				<button className='border bg-black text-white rounded-full p-5'>Default button</button>
				<button className='border bg-black text-white rounded-full p-4'>Default button</button>
				<button className='border bg-black text-white rounded-full p-3'>Default button</button>
				<button className='border bg-black text-white rounded-full p-2'>Default button</button>
				<button className='border bg-black text-white rounded-full p-1'>Default button</button>
			</div>

			<Footer />
		</div>
	);
};

export default Buttons;
