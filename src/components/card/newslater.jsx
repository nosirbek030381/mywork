import React from 'react';

const NewsLater = () => {
	return (
		<div className=''>
			<div className='relative flex flex-col justify-center items-center mt-40 '>
				<h1 className='text-xl font-normal'>SUBSCRIBE TO NEWSLETTER</h1>
				<p className='text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dignissimos nemo repellat
					eos cum perferendis!
				</p>
				<div className='mt-10 flex'>
					<input
						type='text'
						placeholder='Your email address'
						className='border-black p-1 border w-96'
					/>
					<button className='border text-white bg-black p-3'>Subscribe now!</button>
				</div>
			</div>
		</div>
	);
};

export default NewsLater;
