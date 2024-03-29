import Header from '../components/header/header';
import { AboutProject, LoginPage, MainPage, RegsiterPage, ContentsPage } from '../pages';

import { Route, Routes } from 'react-router';

import { routerLinks } from '../router-config';

import '../index.css';
import WithProtected from '../HOCs/withProtected';
import Course from '../pages/course/course';

function App() {
	return (
		<div className='app'>
			<Header links={routerLinks} />
			<div className='wrapper'>
				<Routes>
					<Route path={'/'} index element={<MainPage />} />
					<Route path={'/about-project'} element={<AboutProject />} />
					<Route path={"/contents"} element={<WithProtected component={<ContentsPage />} />} />
					<Route path={'/auth'}>
						<Route index path={'login'} element={<LoginPage />} />
						<Route path={'register'} element={<RegsiterPage />} />
					</Route>
					<Route path='/courses/:department' element={<Course />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
