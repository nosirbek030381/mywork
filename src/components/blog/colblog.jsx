import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const ColBlog = () => {
	return (
		<div>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Blog</h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ blog
				</p>
			</div>

			{/* Blog 2 columns */}
			<div className='container mt-10 mx-auto flex justify-center items-center'>
				<div className='grid grid-cols-2 gap-10'>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
					<div className='flex flex-col space-y-4 border-b-2'>
						<img
							src='https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'
							alt=''
							className='rounded-md shadow-lg'
						/>
						<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
						<p className='text-gray-500'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat
							sunt ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias
							maiores itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit
							repellendus eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure
							odio, veritatis similique enim explicabo eum?
						</p>
						<a href='/blog' className='text-blue-500 hover:underline'>
							Read more
						</a>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ColBlog;
