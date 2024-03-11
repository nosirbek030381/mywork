import React from 'react';

import Cards from './cards';

const Card = () => {
	return (
		<>
			<div className='bg-[#f9f9f9]  mb-10'>
				<div className='relative flex justify-center items-center'>
					<h1 className='text-2xl mt-24 font-medium text-center'>Trendy Products</h1>
				</div>
				<Cards />
			</div>
		</>
	);
};

export default Card;
