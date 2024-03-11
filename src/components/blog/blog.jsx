import React from 'react';
import {
	FaCalendar,
	FaComment,
	FaFacebook,
	FaGooglePlus,
	FaInstagram,
	FaReply,
	FaTwitter,
	FaUser,
} from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avater-4.jpg';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Blog = () => {
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

			<div className='flex justify-center items-center mt-24 mb-10 flex-col'>
				<img
					src={'https://demo.themefisher.com/aviato-bootstrap/images/blog/blog-post-1.jpg'}
					alt=''
					className='w-[60%] rounded-md shadow-lg h-[60vh] '
				/>
				<div className='container mt-10  w-[50%] space-y-8 '>
					<h1 className='text-2xl'>How To Wear Bright Shoes</h1>
					<p className='flex items-center space-x-6 cursor-pointer'>
						<FaCalendar className='mx-1' />
						20, MAR 2017
						<span className='flex items-center space-x-3 text-gray-500'>
							<FaUser className='mx-1' /> POSTED BY ADMIN
						</span>
						<span className='flex space-x-2 items-center cursor-pointer text-gray-500'>
							<IoIosPricetag /> <p className='hover:text-gray-900'>LIFESTYLE</p>,{' '}
							<p className='hover:text-gray-900'>TRAVEL</p>,{' '}
							<p className='hover:text-gray-900'>FASHION</p>
						</span>
						<span className='flex space-x-2 items-center'>
							<FaComment className='mx-2' /> 4 COMMENTS
						</span>
					</p>
					<p className=''>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nobis, fugiat sunt
						ducimus, nam aperiam id necessitatibus maxime optio sit reprehenderit? Alias maiores
						itaque enim voluptas temporibus fugiat perspiciatis, odio dolorem, velit repellendus
						eveniet deleniti! Ducimus iusto ea debitis ab nobis cupiditate nisi iure odio, veritatis
						similique enim explicabo eum?
					</p>
					<p className='flex justify-center items-center border-l-4 border-l-black h-[80px]'>
						{' '}
						<p className='ml-7 '>
							Tags Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem facilis
							dignissimos aliquid laboriosam libero. Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Ducimus, illum!
						</p>
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non voluptatem libero
						excepturi sed delectus velit corporis repellat alias iusto, dolore ratione enim
						dignissimos ipsam, dolor facere vel veniam placeat similique molestias fugit officiis ea
						laboriosam? Voluptatibus, perspiciatis similique aperiam, dolore cumque incidunt rem
						consectetur ipsa quos quibusdam inventore veritatis? Impedit aliquam neque at dolorum.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel accusantium et
						perspiciatis enim? Aperiam error at explicabo vitae dolore.
					</p>

					<p className='bg-[#f5f5f5] rounded-lg'>
						blog-classic{' '}
						{
							<p className='ml-10'>
								margin-bottom: 70px; <br /> padding-bottom: 70px; <br /> border-bottom: 1px solid
								#efefef;
							</p>
						}
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt ad voluptatem
						similique placeat dolorem molestias rerum dolore impedit aut qui inventore, a dolor
						dolores sunt repellat quibusdam, atque accusamus obcaecati omnis at, quod minima
						aliquam. Voluptatibus sapiente debitis, excepturi omnis, nisi porro iusto repellendus
						rem facilis praesentium est maxime eligendi? Animi facilis quibusdam officia quidem hic
						laboriosam enim et id est, neque ducimus in adipisci obcaecati ad? Nobis odit magnam
						possimus? Nam libero asperiores natus beatae cum ipsum magni, distinctio quod, quasi ab
						earum quam, iusto optio voluptate commodi! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Repudiandae quasi velit reprehenderit labore eaque explicabo
						recusandae reiciendis earum consequuntur. Ex, nemo illo porro quaerat numquam at
						cupiditate eveniet? Sed doloribus atque veritatis rem repellendus! Quisquam illo,
						impedit quae accusantium maiores sapiente, cumque expedita id aliquid voluptatum
						perferendis rerum accusamus amet?
					</p>

					<h2 className='uppercase border-b-2 border-b-black/35'>Share this post</h2>
					<p className='flex space-x-4 text-3xl cursor-pointer'>
						<FaFacebook className='text-blue-600' />
						<FaTwitter className='text-blue-600' />
						<FaInstagram />
						<FaGooglePlus className='text-red-600' />
					</p>

					{/* comments */}
					<h2 className='uppercase border-b-2 border-b-black/40'>10 comments</h2>
					<div className='flex space-x-4 items-center'>
						<img src={avatar} alt='' className='w-14 h-14 rounded-full' />
						<div>
							<h2 className='text-xl'>
								John Doe{' '}
								<span className='flex items-center text-base'>
									<FaReply className='mx-2' />
									Reply
								</span>
							</h2>
							<p className='text-gray-500'>20, MAR 2017</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nulla.</p>
						</div>
					</div>
					<div className='flex space-x-4 items-center ml-12'>
						<img src={avatar} alt='' className='w-14 h-14 rounded-full' />
						<div>
							<h2 className='text-xl'>
								John Doe{' '}
								<span className='flex items-center text-base'>
									<FaReply className='mx-2' />
									Reply
								</span>
							</h2>
							<p className='text-gray-500'>20, MAR 2017</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nulla.</p>
						</div>
					</div>
					<div className='flex space-x-4 items-center ml-36'>
						<img src={avatar} alt='' className='w-14 h-14 rounded-full' />
						<div>
							<h2 className='text-xl'>
								John Doe{' '}
								<span className='flex items-center text-base'>
									<FaReply className='mx-2' />
									Reply
								</span>
							</h2>
							<p className='text-gray-500'>20, MAR 2017</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nulla.</p>
						</div>
					</div>

					<div className='flex space-x-4 items-center'>
						<img src={avatar} alt='' className='w-14 h-14 rounded-full' />
						<div>
							<h2 className='text-xl'>
								John Doe{' '}
								<span className='flex items-center text-base'>
									<FaReply className='mx-2' />
									Reply
								</span>
							</h2>
							<p className='text-gray-500'>20, MAR 2017</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nulla.</p>
						</div>
					</div>

					<div className='flex space-x-4 items-center'>
						<img src={avatar} alt='' className='w-14 h-14 rounded-full' />
						<div>
							<h2 className='text-xl'>
								John Doe{' '}
								<span className='flex items-center text-base'>
									<FaReply className='mx-2' />
									Reply
								</span>
							</h2>
							<p className='text-gray-500'>20, MAR 2017</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nulla.</p>
						</div>
					</div>

					<h2 className='uppercase border-b-2 border-b-black/40'>LEAVE YOU COMMENTS</h2>
					<form className='grid gap-3'>
						<div className='grid grid-cols-2 gap-6'>
							<input
								type='text'
								placeholder='Full name'
								className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
							/>
							<input
								type='text'
								placeholder='Email'
								className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
							/>
						</div>
						<input
							type='text'
							placeholder='Website'
							className='px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						/>{' '}
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Your comment'
							className='bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-purple-500 outline-none'
						></textarea>
						<br />
						<button className='bg-black text-white py-3.5 rounded-md'>Post comment</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Blog;
