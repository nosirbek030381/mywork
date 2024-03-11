import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import profile from '../../assets/avater-3.jpg';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Dashboard = () => {
	const [activeSection, setActiveSection] = useState('dashboard');

	// Function to handle the click event and set the active section
	const handleSectionChange = section => {
		setActiveSection(section);
	};

	return (
		<div>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Dashboard</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ dashboard
				</p>
			</div>

			<div className='mt-20 mb-20'>
				<div className='flex justify-center space-x-8 items-center'>
					<button
						className={`border p-3 rounded-lg ${
							activeSection === 'dashboard' && 'bg-black text-white'
						}`}
						onClick={() => handleSectionChange('dashboard')}
					>
						Dashboard
					</button>
					<button
						className={`border p-3 rounded-lg ${
							activeSection === 'orders' && 'bg-black text-white'
						}`}
						onClick={() => handleSectionChange('orders')}
					>
						Orders
					</button>
					<button
						className={`border p-3 rounded-lg ${
							activeSection === 'address' && 'bg-black text-white'
						}`}
						onClick={() => handleSectionChange('address')}
					>
						Address
					</button>
					<button
						className={`border p-3 rounded-lg ${
							activeSection === 'profile' && 'bg-black text-white'
						}`}
						onClick={() => handleSectionChange('profile')}
					>
						Profile details
					</button>
				</div>
				<div className=''>
					<div className='flex justify-center items-center mt-10 border w-[50%] mx-auto'>
						<div className='flex flex-col items-center justify-center'>
							{activeSection === 'dashboard' && (
								<>
									<div className='flex justify-center items-center space-x-5'>
										<img src={profile} alt='profle' className='rounded-full w-40 h-40' />
										<div>
											<h1 className='font-semibold text-xl'>John Doe</h1>
											<p className='text-gray-400'>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nostrum
												at architecto nesciunt impedit earum.
											</p>
										</div>
									</div>

									<div>
										<h4 className='text-xl font-bold mb-4'>Total Orders</h4>
										<table className='table w-[900px] border-collapse'>
											<thead className='bg-gray-200'>
												<tr>
													<th className='py-2 px-4 border-b border-gray-300'>Order ID</th>
													<th className='py-2 px-4 border-b border-gray-300'>Date</th>
													<th className='py-2 px-4 border-b border-gray-300'>Items</th>
													<th className='py-2 px-4 border-b border-gray-300'>Total Price</th>
													<th className='py-2 px-4 border-b border-gray-300'></th>
												</tr>
											</thead>
											<tbody>
												<tr className='bg-white'>
													<td className='py-2 px-4 border-b border-gray-300'>
														<a href='#!' className='text-blue-500'>
															#252125
														</a>
													</td>
													<td className='py-2 px-4 border-b border-gray-300'>Mar 25, 2016</td>
													<td className='py-2 px-4 border-b border-gray-300'>2</td>
													<td className='py-2 px-4 border-b border-gray-300'>$ 99.00</td>
													<td className='py-2 px-4 border-b border-gray-300'></td>
												</tr>
												<tr className='bg-gray-50'>
													<td className='py-2 px-4 border-b border-gray-300'>
														<a href='#!' className='text-blue-500'>
															#252126
														</a>
													</td>
													<td className='py-2 px-4 border-b border-gray-300'>Mar 26, 2016</td>
													<td className='py-2 px-4 border-b border-gray-300'>3</td>
													<td className='py-2 px-4 border-b border-gray-300'>$ 150.00</td>
													<td className='py-2 px-4 border-b border-gray-300'></td>
												</tr>
												<tr className='bg-white'>
													<td className='py-2 px-4 border-b border-gray-300'>
														<a href='#!' className='text-blue-500'>
															#252127
														</a>
													</td>
													<td className='py-2 px-4 border-b border-gray-300'>Mar 27, 2016</td>
													<td className='py-2 px-4 border-b border-gray-300'>1</td>
													<td className='py-2 px-4 border-b border-gray-300'>$ 75.00</td>
													<td className='py-2 px-4 border-b border-gray-300'></td>
												</tr>
											</tbody>
										</table>
									</div>
								</>
							)}
							{activeSection === 'orders' && (
								<div className='dashboard-wrapper user-dashboard' id='order'>
									<div className='overflow-x-auto'>
										<table className='table-auto border-collapse w-[955px]'>
											<thead>
												<tr className='bg-gray-200'>
													<th className='px-4 py-2'>Order ID</th>
													<th className='px-4 py-2'>Date</th>
													<th className='px-4 py-2'>Items</th>
													<th className='px-4 py-2'>Total Price</th>
													<th className='px-4 py-2'>Status</th>
													<th className='px-4 py-2'></th>
												</tr>
											</thead>
											<tbody className='text-gray-700'>
												<tr>
													<td className='border px-4 py-2'>#451231</td>
													<td className='border px-4 py-2'>Mar 25, 2016</td>
													<td className='border px-4 py-2'>2</td>
													<td className='border px-4 py-2'>$99.00</td>
													<td className='border px-4 py-2'>
														<span className='bg-blue-500 text-white py-1 px-2 rounded'>
															Processing
														</span>
													</td>
													<td className='border px-4 py-2'>
														<a href='#!' className='border p-2 rounded-md'>
															View
														</a>
													</td>
												</tr>
												<tr>
													<td className='border px-4 py-2'>#451231</td>
													<td className='border px-4 py-2'>Mar 25, 2016</td>
													<td className='border px-4 py-2'>2</td>
													<td className='border px-4 py-2'>$99.00</td>
													<td className='border px-4 py-2'>
														<span className='bg-blue-500 text-white py-1 px-2 rounded'>
															Processing
														</span>
													</td>
													<td className='border px-4 py-2'>
														<a href='#!' className='border p-2 rounded-md'>
															View
														</a>
													</td>
												</tr>
												<tr>
													<td className='border px-4 py-2'>#451231</td>
													<td className='border px-4 py-2'>Mar 25, 2016</td>
													<td className='border px-4 py-2'>2</td>
													<td className='border px-4 py-2'>$99.00</td>
													<td className='border px-4 py-2'>
														<span className='bg-blue-500 text-white py-1 px-2 rounded'>
															Processing
														</span>
													</td>
													<td className='border px-4 py-2'>
														<a href='#!' className='border p-2 rounded-md'>
															View
														</a>
													</td>
												</tr>
												<tr>
													<td className='border px-4 py-2'>#451231</td>
													<td className='border px-4 py-2'>Mar 25, 2016</td>
													<td className='border px-4 py-2'>2</td>
													<td className='border px-4 py-2'>$99.00</td>
													<td className='border px-4 py-2'>
														<span className='bg-blue-500 text-white py-1 px-2 rounded'>
															Processing
														</span>
													</td>
													<td className='border px-4 py-2'>
														<a href='#!' className='border p-2 rounded-md'>
															View
														</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							)}
							{activeSection === 'address' && (
								<div className='dashboard-wrapper user-dashboard' id='address'>
									<div className='overflow-x-auto'>
										<table className='table-auto border-collapse w-[955px]'>
											<thead>
												<tr className='bg-gray-200'>
													<th className='px-4 py-2'>Company</th>
													<th className='px-4 py-2'>Name</th>
													<th className='px-4 py-2'>Address</th>
													<th className='px-4 py-2'>Country</th>
													<th className='px-4 py-2 col-span-2'>Phone</th>
												</tr>
											</thead>
											<tbody className='text-gray-700'>
												<tr>
													<td className='border px-4 py-2'>Nokia</td>
													<td className='border px-4 py-2'>Adam Smith</td>
													<td className='border px-4 py-2'>
														9/4 C Babor Road, Mohammad Pur, Dhaka
													</td>
													<td className='border px-4 py-2'>Bangladesh</td>
													<td className='border px-4 py-2'>+884 5452 6452</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<FaPencilAlt />
														</button>
													</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<IoMdClose />
														</button>
													</td>
												</tr>
												<tr>
													<td className='border px-4 py-2'>Nokia</td>
													<td className='border px-4 py-2'>Adam Smith</td>
													<td className='border px-4 py-2'>
														9/4 C Babor Road, Mohammad Pur, Dhaka
													</td>
													<td className='border px-4 py-2'>Bangladesh</td>
													<td className='border px-4 py-2'>+884 5452 6452</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<FaPencilAlt />
														</button>
													</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<IoMdClose />
														</button>
													</td>
												</tr>
												<tr>
													<td className='border px-4 py-2'>Nokia</td>
													<td className='border px-4 py-2'>Adam Smith</td>
													<td className='border px-4 py-2'>
														9/4 C Babor Road, Mohammad Pur, Dhaka
													</td>
													<td className='border px-4 py-2'>Bangladesh</td>
													<td className='border px-4 py-2'>+884 5452 6452</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<FaPencilAlt />
														</button>
													</td>
													<td className='border px-4 py-2'>
														<button className='btn btn-default'>
															<IoMdClose />
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							)}
							{activeSection === 'profile' && (
								<div className='flex space-x-10 justify-start mt-5 mb-5' id='profile'>
									<img src={profile} alt='profkile' className='rounded-full w-40 h-40' />
									<div className='space-x-4 '>
										<span className='font-semibold mx-3'>Full name:</span> John Doe <br />
										<span className='font-semibold mx-3'>Country:</span> USA <br />
										<span className='font-semibold mx-3'>Email:</span>mail@gmail.com <br />
										<span className='font-semibold mx-3'>Phone:</span> +880123123 <br />
										<span className='font-semibold mx-3'>Date of Birth:</span> Dec , 22 ,1991
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
