import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { FaCartPlus, FaChevronDown, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Dropdown from './dropdown';

const Navbar = () => {
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [isOpenCart, setIsOpenCart] = useState(false);
	// const [toggleBtn, setToggleBtn] = useState(false);
	const navigate = useNavigate();

	const handlerSearch = () => {
		setIsOpenSearch(!isOpenSearch);
	};

	const handlerCart = () => {
		setIsOpenCart(!isOpenCart);
	};

	return (
		<>
			<div className='flex justify-center items-center'>
				<nav className='container flex flex-1 flex-col sm:flex-row space-y-4 justify-between items-center text-black'>
					{/* Navbar number */}
					<p
						className='text-lg flex items-center justify-center mt-4'
						onClick={() => navigator.clipboard.writeText('+91-1234567890')}
					>
						<FaPhoneAlt className='text-lg mx-2' /> +91-1234567890
					</p>
					{/* Navbar heading */}
					<h1
						className='text-2xl font-bold flex items-center cursor-pointer'
						onClick={() => navigate('/')}
					>
						MY APP
					</h1>
					{/*  */}
					<ul className='flex items-center justify-center space-x-4 text-lg'>
						<li
							className='flex items-center cursor-pointer space-x-4 font-light'
							onClick={handlerCart}
						>
							<FaCartPlus className='mx-1 font-light' /> Cart
							{isOpenCart && (
								<div className='absolute sm:top-12 top-40 right-50 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<div className='py-5 px-5'>
										<p>Your cart is empty.</p>
									</div>
								</div>
							)}
						</li>
						<li className='flex items-center cursor-pointer font-light' onClick={handlerSearch}>
							{' '}
							<FaSearch className='mx-1 font-light' /> Search
							{isOpenSearch && (
								<div className='absolute sm:top-12 top-40 right-[120px] z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<div className='py-1'>
										<input
											type='text'
											placeholder='Search...'
											className='px-4 py-2 w-full border-gray-300 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
										/>
									</div>
								</div>
							)}
						</li>
						<Dropdown />
					</ul>
				</nav>
			</div>
			{/* divide */}
			<div className='border-black/50 border mt-5 max-w-[80%] mx-auto text-center' />
			{/* Navbar */}
			<div className='flex justify-center items-center mt-3'>
				<nav className='container flex flex-1 justify-center items-center'>
					<ul className='flex items-center justify-center space-x-4 text-lg'>
						<li className='cursor-pointer' onClick={() => navigate('/')}>
							Home
						</li>
						<DropdownMenu title='Shop'>
							<div className='flex space-x-16 w-[400px] justify-center '>
								<div>
									<p className='border-b-2 text-gray-500'>Pages</p>
									<DropdownItem href='/shop'>Shop</DropdownItem>
									<DropdownItem href='/checkout'>Checkout</DropdownItem>
									<DropdownItem href='/cart'>Cart</DropdownItem>
									<DropdownItem href='/pricing'>Pricing</DropdownItem>
									<DropdownItem href='/confirmation'>Confirmation</DropdownItem>
								</div>
								<div>
									<p className='border-b-2 text-gray-500'>Layout</p>
									<DropdownItem href='/shop'>Product detail</DropdownItem>
									<DropdownItem href='/checkout'>Shop with sidebar</DropdownItem>
								</div>
							</div>
						</DropdownMenu>
						<DropdownMenu title='Pages'>
							<div className='flex justify-center  mt-4 space-x-10 left-1 right-0 w-[600px] '>
								<div className=''>
									<p className='text-base border-b-2 text-gray-400'>Introduction</p>
									<DropdownItem href='/contact'>Contact</DropdownItem>
									<DropdownItem href='/about'>About us</DropdownItem>
									<DropdownItem href='/404'>404 Page</DropdownItem>
									<DropdownItem href='/coming'>Coming soon</DropdownItem>
									<DropdownItem href='/faq'>FAQ</DropdownItem>
								</div>
								<div>
									<p className='text-base border-b-2 text-gray-400'>Dashboard</p>
									<DropdownItem href='/dashboard'>User interface</DropdownItem>
									<DropdownItem href='/dashboard#order'>Orders</DropdownItem>
									<DropdownItem href='/dashboard#address'>Address</DropdownItem>
									<DropdownItem href='/dashboard#profile'>Profile details</DropdownItem>
								</div>
								<div>
									<p className='text-base border-b-2 text-gray-400'>Utility</p>
									<DropdownItem href='/sign'>Login page</DropdownItem>
									<DropdownItem href='/sign'>Sign up page</DropdownItem>
								</div>
								<div>
									<img src='' alt='' />
								</div>
							</div>
						</DropdownMenu>
						<DropdownMenu title='Blog'>
							<div className='w-[180px] flex justify-center items-center'>
								<div>
									<DropdownItem href='/leftside'>Blog Left Sidebar</DropdownItem>
									<DropdownItem href='/rightside'>Blog Right Sidebar</DropdownItem>
									<DropdownItem href='/fullblog'>Blog Full Width</DropdownItem>
									<DropdownItem href='/columblog'>Blog 2 Columns</DropdownItem>
									<DropdownItem href='/blog'>Blog Single</DropdownItem>
								</div>
							</div>
						</DropdownMenu>
						<DropdownMenu title='Elements'>
							<DropdownItem href='/typography'>Typography</DropdownItem>
							<DropdownItem href='/buttons'>Buttons</DropdownItem>
							<DropdownItem href='/alert'>Alert</DropdownItem>
						</DropdownMenu>
					</ul>
				</nav>
			</div>
		</>
	);
};

const DropdownMenu = ({ title, children }) => {
	return (
		<Menu as='li' className='relative '>
			<Menu.Button className='cursor-pointer'>
				{title} <FaChevronDown className='inline-block' />
			</Menu.Button>
			<Menu.Items className='absolute z-10 mt-2 origin-top-right bg-white divide-y space-x-10 justify-evenly items-center flex divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
				<div className='py-4'>{children}</div>
			</Menu.Items>
		</Menu>
	);
};

const DropdownItem = ({ href, children }) => {
	return (
		<Menu.Item>
			{({ active }) => (
				<a
					href={href}
					className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
				>
					{children}
				</a>
			)}
		</Menu.Item>
	);
};

export default Navbar;
