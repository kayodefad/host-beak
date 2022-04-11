import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AddBill from './views/pages/addBill';
import Page404 from './views/pages/Page404';
import SignUp from './views/pages/signUp';
import ViewReports from './views/pages/viewReports';
import Welcome from './views/pages/welcome';
import _nav from './_nav';

const App = () => {
	return (
		<Router>
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
		</Router>
	);
};

export default App;
