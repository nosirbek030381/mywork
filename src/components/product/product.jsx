import React from 'react';
import img from '../../assets/post-thumb-2.jpg';
import img1 from '../../assets/post-thumb-3.jpg';
import img2 from '../../assets/post-thumb-4.jpg';

const Product = () => {
	return (
		<div className=' h-[90vh] mt-24'>
			<h1 className='text-2xl text-center'>Product category</h1>
			<div className='flex flex-1 flex-col md:flex-row space-y-4 md:space-y-0 justify-center items-center space-x-5 mt-10'>
				<div className='space-y-5'>
					<div className=''>
						<h2 className='absolute text-xl p-1'>Product Details</h2>
						<p className='absolute mt-7 w-96 p-1'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, nobis.
						</p>
						<img src={img} alt='product' className='w-full h-80 rounded' />
					</div>

					<div>
						<h2 className='absolute text-xl p-1'>Product Details</h2>
						<p className='absolute mt-7 w-96 p-1'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, nobis.
						</p>
						<img src={img1} alt='product' className='w-full h-80 rounded' />
					</div>
				</div>

				<div className='transition-all duration-200'>
					<h2 className='absolute text-xl p-1'>Product Details</h2>
					<p className='absolute mt-7 w-96 p-1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, nobis.
					</p>
					<img src={img2} alt='product' className='md:w-[30rem] md:h-[71vh] w-full h-80 rounded ' />
				</div>
			</div>
		</div>
	);
};

export default Product;
