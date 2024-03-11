import { Menu } from '@headlessui/react';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('EN');

	const handleItemClick = language => {
		setSelectedLanguage(language);
	};

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='inline-flex justify-center items-center w-full px-4 py-2 font-medium text-gray-700 bg-white rounded-md text-lg'>
					{selectedLanguage} <FaChevronDown className='mx-1' />
				</Menu.Button>
			</div>
			<Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
				<div className='py-1 '>
					<Menu.Item>
						{({ active }) => (
							<a
								href='#!'
								className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
								onClick={() => handleItemClick('UZ')}
							>
								UZ
							</a>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<a
								href='#!'
								className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
								onClick={() => handleItemClick('RU')}
							>
								RU
							</a>
						)}
					</Menu.Item>
				</div>
			</Menu.Items>
		</Menu>
	);
};

export default Dropdown;
