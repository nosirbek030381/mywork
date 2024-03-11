import React from 'react';
import { FaCheck, FaThumbsUp } from 'react-icons/fa';
import { GoAlert } from 'react-icons/go';
import { IoMdClose, IoMdCloseCircleOutline } from 'react-icons/io';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Alert = () => {
	return (
		<div>
			<Navbar />
			<h1 className='text-4xl text-center mt-40'>Alert styles </h1>
			<div className='mt-16 flex justify-center items-center mx-auto mb-16 w-full flex-col space-y-5'>
				<p className='w-[60%] p-3 bg-[#dff0d8] text-[#3c763d] flex items-center rounded-lg'>
					<FaThumbsUp className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 bg-[#d9edf7] text-[#31708f] flex items-center rounded-lg'>
					<FaCheck className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 bg-[#fcf8e3] text-[#8a6d3b] flex items-center rounded-lg'>
					<GoAlert className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 bg-[#a94442] text-[#f2dede] flex items-center rounded-lg'>
					<IoMdCloseCircleOutline className='mx-2' />
					Well done! You succesfully read this message
				</p>
			</div>

			<div className='mt-16 flex justify-center items-center mx-auto mb-16 w-full flex-col space-y-5'>
				<p className='w-[60%] p-3 border border-[#dff0d8]  flex items-center rounded-lg'>
					<FaThumbsUp className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 border border-[#d9edf7]  flex items-center rounded-lg'>
					<FaCheck className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 border border-[#fcf8e3]  flex items-center rounded-lg'>
					<GoAlert className='mx-2' />
					Well done! You succesfully read this message
				</p>
				<p className='w-[60%] p-3 border border-[#a94442]  flex items-center rounded-lg'>
					<IoMdCloseCircleOutline className='mx-2' />
					Well done! You succesfully read this message
				</p>
			</div>

			<div className='mt-16 flex justify-center items-center mx-auto mb-16 w-full flex-col space-y-5'>
				<p className='w-[60%] p-3 bg-[#dff0d8] text-[#3c763d] flex items-center justify-between rounded-lg'>
					<div className='flex items-center'>
						<FaThumbsUp className='mx-2' />
						Well done! You succesfully read this message
					</div>
					<IoMdClose />
				</p>
				<p className='w-[60%] p-3 bg-[#d9edf7] text-[#31708f] flex items-center justify-between rounded-lg'>
					<div className='flex items-center'>
						<FaCheck className='mx-2' />
						Well done! You succesfully read this message
					</div>
					<IoMdClose />
				</p>
				<p className='w-[60%] p-3 bg-[#fcf8e3] text-[#8a6d3b] flex items-center justify-between rounded-lg'>
					<div className='flex items-center'>
						<GoAlert className='mx-2' />
						Well done! You succesfully read this message
					</div>
					<IoMdClose />
				</p>
				<p className='w-[60%] p-3 bg-[#a94442] text-[#f2dede] flex items-center justify-between rounded-lg'>
					<div className='flex items-center'>
						<IoMdCloseCircleOutline className='mx-2' />
						Well done! You succesfully read this message
					</div>
					<IoMdClose />
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Alert;
