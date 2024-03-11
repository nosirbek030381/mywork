import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	About,
	Alert,
	Blog,
	Buttons,
	Cart,
	Checkout,
	ColBlog,
	ComingSoon,
	Confirmation,
	Contact,
	Dashboard,
	FAQ,
	FullBlog,
	LeftSidebarBlog,
	Main,
	NotFound,
	Pricing,
	RightSidebarBlog,
	Shop,
	Sign,
} from './components';
import Typograph from './components/elemet/typograph';

const App = () => {
	return (
		<div className=''>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='/confirmation' element={<Confirmation />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/404' element={<NotFound />} />
				<Route path='/coming' element={<ComingSoon />} />
				<Route path='/faq' element={<FAQ />} />
				<Route path='/sign' element={<Sign />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/columblog' element={<ColBlog />} />
				<Route path='/fullblog' element={<FullBlog />} />
				<Route path='/leftside' element={<LeftSidebarBlog />} />
				<Route path='/rightside' element={<RightSidebarBlog />} />
				<Route path='/typography' element={<Typograph />} />
				<Route path='/buttons' element={<Buttons />} />
				<Route path='/alert' element={<Alert />} />
			</Routes>
		</div>
	);
};

export default App;
