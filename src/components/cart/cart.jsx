import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Cart = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Cart</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ cart
				</p>
			</div>

			<div className='relative mt-5 flex justify-center items-center flex-col mb-5 space-x-7'>
				<table className='border-collapse border border-gray-200'>
					<thead>
						<tr className='bg-gray-100'>
							<th className='px-4 py-2'>Product</th>
							<th className='px-4 py-2'>Price</th>
							<th className='px-4 py-2'>Quantity</th>
							<th className='px-4 py-2'>Total</th>
							<th className='px-4 py-2'></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='border px-4 py-2'>
								<div className='flex items-center'>
									<img
										src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
										alt='product'
										className='w-20 h-20 rounded'
									/>
									<p className='ml-3'>Product name</p>
								</div>
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<input type='number' className='w-12 h-8 border rounded-md' value='1' />
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<button className='text-red-500'>X</button>
							</td>
						</tr>
						<tr>
							<td className='border px-4 py-2'>
								<div className='flex items-center'>
									<img
										src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
										alt='product'
										className='w-20 h-20 rounded'
									/>
									<p className='ml-3'>Product name</p>
								</div>
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<input type='number' className='w-12 h-8 border rounded-md' value='1' />
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<button className='text-red-500'>X</button>
							</td>
						</tr>
						<tr>
							<td className='border px-4 py-2'>
								<div className='flex items-center'>
									<img
										src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
										alt='product'
										className='w-20 h-20 rounded'
									/>
									<p className='ml-3'>Product name</p>
								</div>
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<input type='number' className='w-12 h-8 border rounded-md' value='1' />
							</td>
							<td className='border px-4 py-2'>$50.00</td>
							<td className='border px-4 py-2'>
								<button className='text-red-500'>X</button>
							</td>
						</tr>
					</tbody>
				</table>
				<button
					className='mt-5 border p-4 bg-black text-white hover:text-black hover:bg-slate-50 rounded-md'
					onClick={() => navigate('/checkout')}
				>
					Checkout
				</button>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
