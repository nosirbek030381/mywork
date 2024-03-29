import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../assets/verified.png';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Checkout = () => {
	return (
		<>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Checkout</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ checkout
				</p>
			</div>
			<div className='relative flex justify-around items-center mt-10'>
				<div className='font-[sans-serif] bg-white p-4 min-h-screen'>
					<div className='lg:max-w-6xl max-w-xl mx-auto'>
						<div className='grid lg:grid-cols-3 gap-8'>
							<div className='lg:col-span-2 max-lg:order-1'>
								<h2 className='text-3xl font-extrabold text-[#333]'>Billing detail</h2>
								<p className='text-[#333] text-base mt-6 border w-[68%]'></p>
								<form className='mt-6 max-w-lg'>
									<div className='grid gap-6'>
										<input
											type='text'
											placeholder='Full name'
											className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
										/>
										<div className='flex bg-gray-100 border rounded-md focus-within:border-purple-500 overflow-hidden'>
											<input
												type='text'
												placeholder='Address'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm outline-none'
											/>
										</div>
										<div className='grid grid-cols-2 gap-6'>
											<input
												type='text'
												placeholder='ZIP code'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
											/>
											<input
												type='text'
												placeholder='City'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
											/>
										</div>
										<input
											type='text'
											placeholder='Country'
											className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
										/>
									</div>
								</form>
								<h2 className='text-3xl font-extrabold text-[#333] mt-10'>Payment metohd</h2>

								<p className='text-[#333] text-base mt-6 border w-[68%]'></p>

								<form className='mt-6 max-w-lg'>
									<div className='grid gap-6'>
										<div className='flex bg-gray-100 border rounded-md focus-within:border-purple-500 overflow-hidden'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 ml-3'
												viewBox='0 0 32 20'
											>
												<circle cx='10' cy='10' r='10' fill='#f93232' data-original='#f93232' />
												<path
													fill='#fed049'
													d='M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z'
													className='hovered-path'
													data-original='#fed049'
												/>
											</svg>
											<input
												type='number'
												placeholder='Card Number'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm outline-none'
											/>
										</div>
										<div className='grid grid-cols-2 gap-6'>
											<input
												type='number'
												placeholder='EXP.'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
											/>
											<input
												type='number'
												placeholder='CVV'
												className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
											/>
										</div>
									</div>
									<button
										type='button'
										className='mt-6 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600'
									>
										Submit
									</button>
								</form>
							</div>
							<div className='bg-gray-100 p-10 rounded-md mt-5'>
								<h2 className='text-4xl font-extrabold text-[#333]'>$250.00</h2>
								<ul className='text-[#333] mt-10 space-y-6'>
									<li className='flex flex-wrap gap-4 text-base'>
										Split Sneakers <span className='ml-auto font-bold'>$150.00</span>
									</li>
									<li className='flex flex-wrap gap-4 text-base'>
										Echo Elegance <span className='ml-auto font-bold'>$90.00</span>
									</li>
									<li className='flex flex-wrap gap-4 text-base'>
										Tax <span className='ml-auto font-bold'>$10.00</span>
									</li>
									<li className='flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4'>
										Total <span className='ml-auto'>$250.00</span>
									</li>
								</ul>
								<img src={check} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Checkout;
