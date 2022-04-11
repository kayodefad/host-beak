import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import _nav from './_nav';
import Preloader from './components/preloader';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const AddBill = lazy(() => import('./views/pages/addBill'));
const Page404 = lazy(() => import('./views/pages/Page404'));
const SignUp = lazy(() => import('./views/pages/signUp'));
const ViewReports = lazy(() => import('./views/pages/viewReports'));
const Welcome = lazy(() => import('./views/pages/welcome'));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Preloader />}>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route index element={<Welcome />} />
						{_nav.map((item, i) => {
							const { component: Component, path } = item;
							return <Route key={i} path={path} element={<Component />} />;
						})}
						<Route path='analytics/view-reports' element={<ViewReports />} />
						<Route path='purchases/bills' element={<AddBill />} />
					</Route>
					<Route path='sign-up' element={<SignUp />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
