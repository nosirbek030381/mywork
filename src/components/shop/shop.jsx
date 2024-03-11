import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../card/cards';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Shop = () => {
	return (
		<div>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-10 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Shop</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ shop
				</p>
			</div>
			<Cards />
			<Footer />
		</div>
	);
};

export default Shop;
