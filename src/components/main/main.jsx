import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider1 from '../../assets/slider-1.jpg';
import Slider2 from '../../assets/slider-2.jpg';
import Slider3 from '../../assets/slider-3.jpg';
import Card from '../card/card';
import NewsLater from '../card/newslater';
import View from '../card/view';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import Product from '../product/product';

const Main = () => {
	return (
		<>
			<Navbar />
			<div className='h-[70vh] mt-10'>
				<Carousel
					responsive={{
						mobile: {
							breakpoint: { max: 4000, min: 0 },
							items: 1,
						},
					}}
					showDots={true}
				>
					<div className='relative'>
						<img src={Slider1} alt='img' className='w-full h-[70vh] object-cover' />
						<div className='absolute inset-0 bg-black opacity-60' />
						<div className='absolute inset-0 flex flex-col justify-center items-center w-full h-full'>
							<h2 className='text-white text-xl font-semibold shadow'>Product</h2>
							<p className='text-white text-4xl font-semibold shadow'>
								This is Slide 1 description.
							</p>
							<button className='mt-3 border p-3 text-white hover:scale-110'>Shop Now</button>
						</div>
					</div>

					<div className='relative'>
						<img src={Slider2} alt='img' className='w-full h-[70vh] object-cover' />
						<div className='absolute inset-0 bg-black opacity-60' />
						<div className='absolute inset-0 flex flex-col justify-center items-center w-full h-full'>
							<h2 className='text-white text-xl font-semibold shadow'>Product</h2>
							<p className='text-white text-4xl font-semibold shadow'>
								This is Slide 2 description.
							</p>
							<button className='mt-3 border p-3 text-white hover:scale-110'>Shop Now</button>
						</div>
					</div>

					<div className='relative'>
						<img src={Slider3} alt='img' className='w-full h-[70vh] object-cover' />
						<div className='absolute inset-0 bg-black opacity-60' />
						<div className='absolute inset-0 flex flex-col justify-center items-center w-full h-full'>
							<h2 className='text-white text-xl font-semibold shadow'>Product</h2>
							<p className='text-white text-4xl font-semibold shadow'>
								This is Slide 3 description.
							</p>
							<button className='mt-3 border p-3 text-white hover:scale-110'>Shop Now</button>
						</div>
					</div>
				</Carousel>
			</div>
			<Product />
			<Card />
			<NewsLater />
			<View />
			<Footer />
		</>
	);
};

export default Main;
