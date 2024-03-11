import { useState } from 'react';

const Sign = () => {
	const [signin, setSignin] = useState('');

	return (
		<div className='flex justify-center items-center h-screen'>
			{signin === 'Signup' ? (
				<div className='flex flex-col justify-center items-center mt-10 border w-[30%] h-[70vh] transition duration-200'>
					<h1 className='text-4xl font-medium'>Sign Up</h1>
					<h1 className='mt-4 text-2xl'>Create your account</h1>
					<div className='w-full flex flex-col p-4 space-y-6'>
						<input type='text' placeholder='Full name' className='border p-2' />
						<input type='text' placeholder='Last name' className='border p-2' />
						<input type='text' placeholder='username' className='border p-2' />
						<input type='email' placeholder='Email' className='border p-2' />
						<input type='password' placeholder='Password' className='border p-2' />
					</div>
					<button className='mt-5 border p-3 bg-black hover:bg-white text-white hover:text-black font-medium rounded-lg'>
						Sign up
					</button>
					<p className='mt-3 text-gray-500'>
						Already have an account?{' '}
						<a href='#!' className='text-black font-medium' onClick={() => setSignin('Login')}>
							Login
						</a>
					</p>
				</div>
			) : (
				<div className='flex flex-col justify-center items-center mx-auto border w-[30%] h-[40vh] transition duration-200'>
					<h1 className='text-4xl font-medium'>Sign In</h1>
					<h1 className='mt-4 text-2xl'>Login</h1>
					<div className='w-full flex flex-col p-4 space-y-6'>
						<input type='email' placeholder='Email' className='border p-2' />
						<input type='password' placeholder='Password' className='border p-2' />
					</div>
					<button className='mt-5 border p-3 bg-black hover:bg-white text-white hover:text-black font-medium rounded-lg'>
						Login
					</button>
					<p className='mt-3 text-gray-500'>
						Don't have an account?{' '}
						<a href='#!' className='text-black font-medium' onClick={() => setSignin('Signup')}>
							Sign Up
						</a>
					</p>
				</div>
			)}
		</div>
	);
};

export default Sign;
