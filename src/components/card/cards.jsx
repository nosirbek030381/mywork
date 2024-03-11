import React from 'react';
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';
import imgcard from '../../assets/image.png';

const Cards = () => {
	return (
		<div>
			<div className='flex flex-wrap justify-center items-center space-y-6 md:space-y-4 md:space-x-4 lg:space-x-6 mt-16 mb-14'>
				{[...Array(9)].map((_, index) => (
					<div key={index} className='relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
						<div className='overflow-hidden'>
							<img src={imgcard} alt='product' className='w-full h-[50vh] object-cover' />
							<div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60' />
						</div>
						<div className='absolute bottom-0 left-0 right-0 bg-white p-4 text-center'>
							<h2 className='text-xl font-semibold'>Name of product</h2>
							<p className='text-gray-600'>200$</p>
						</div>
						<div className='absolute inset-0 flex justify-center items-center space-x-4 transition duration-200 opacity-0 group-hover:opacity-100'>
							<button className='border hover:border-black p-3 text-black bg-white text-2xl hover:bg-black hover:text-white rounded'>
								<FaSearch />
							</button>
							<button className='border hover:border-black p-3 text-black bg-white text-2xl hover:bg-black hover:text-white rounded'>
								<FaHeart />
							</button>
							<button className='border hover:border-black p-3 text-black bg-white text-2xl hover:bg-black hover:text-white rounded'>
								<FaCartPlus />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;
