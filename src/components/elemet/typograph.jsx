import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

const Typograph = () => {
	return (
		<div>
			<Navbar />
			<div className=' w-full h-[20vh] bg-[#f5f5f5] mt-14 flex justify-center items-center flex-col'>
				<h1 className='container text-4xl'>Typography </h1>
				<p className='container text-gray-500 mt-1'>
					<Link to={'/'} className='text-black'>
						Home
					</Link>{' '}
					/ typography
				</p>
			</div>

			<section className='typography page-wrapper mt-16 mb-10'>
				<div className='container mx-auto'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='text-center text-4xl'>Typography (Heading)</h1>
							<hr className='border-t-2 border-gray-300 my-4' />
							<h1 className='text-4xl'>H1 Heading</h1>
							<h2 className='text-3xl'>H2 Heading</h2>
							<h3 className='text-2xl'>H3 Heading</h3>
							<h4 className='text-xl'>H4 Heading</h4>
							<h5 className='text-lg'>h5 Heading</h5>
							<h6 className='text-base'>h6 Heading</h6>
							<h1 className='text-center mt-20 text-4xl'>Paragraph</h1>
							<hr className='border-t-2 border-gray-300 my-4' />
							<p className='text-base'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat voluptas
								accusamus! Perspiciatis quam quisquam iste id officiis quia commodi quibusdam
								sapiente molestiae! Aliquam tempore ad quis, culpa sit ullam quam inventore
								voluptatum necessitatibus numquam! Tempora nobis iure cupiditate excepturi aliquid
								earum ratione dignissimos, a consequatur odio quo aut rem voluptatem quam repellat
								sint, eligendi facilis maiores unde, soluta quos, veritatis sit. Dolore deleniti
								dolorum repellendus dolorem cum, unde architecto consectetur odit rem eveniet,
								accusantium omnis suscipit totam quibusdam officiis blanditiis molestiae! Totam
								ipsam temporibus aspernatur praesentium quam, laboriosam ipsa rem. Maxime
								repudiandae molestias in consequuntur sint, dicta? Temporibus, fugiat!
							</p>
							<h1 className='text-center mt-20 text-4xl'>Blockquote</h1>
							<hr className='border-t-2 border-gray-300 my-4' />
							<blockquote className='text-lg italic border-l-4 border-l-black p-3'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae rem ut veritatis
								quisquam doloribus nam excepturi, deserunt odit, aut. Possimus blanditiis culpa
								natus eius non molestias nihil praesentium, vel ullam dolorum qui, quibusdam minima
								placeat officiis quod dolorem perferendis dicta harum ab obcaecati nemo! Quisquam,
								porro qui tempora, ducimus aspernatur vitae odit aliquid soluta eius tenetur, atque
								minima error est officiis itaque nobis voluptate? Modi aliquid reiciendis
								perspiciatis totam asperiores consequuntur sint molestias. Error quas quod
								voluptatem eligendi modi asperiores ipsam nemo, obcaecati provident omnis nisi
								dolorem aliquam sapiente, quidem, porro quo id fuga! Recusandae blanditiis aliquid
								repudiandae animi officia.
							</blockquote>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Typograph;
