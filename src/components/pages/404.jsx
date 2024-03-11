import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center flex-1 h-[90vh] flex-col'>
			<h1 className='text-5xl font-semibold'>Not found</h1>
			<h1 className='font-semibold text-[300px]'>404</h1>
			<p className='text-3xl font-semibold'>Page not found</p>
			<button
				className='mt-10 border p-3 rounded-lg bg-black hover:bg-gray-800 text-white  font-semibold'
				onClick={() => navigate('/')}
			>
				Go back home
			</button>

			<p className='text-gray-500 mt-10 '>&copy; All Rights Reserved</p>
		</div>
	);
};

export default NotFound;
