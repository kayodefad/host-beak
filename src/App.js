import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import preloader from './assets/images/preloader.gif';
import DefaultLayout from './layout/DefaultLayout';
import AddBill from './views/pages/add-bill';
import SignUp from './views/pages/sign-up';
import ViewReports from './views/pages/view-reports';

const preloaderStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<AddBill />} />
					<Route path='add-bill' element={<AddBill />} />
					<Route path='view-reports' element={<ViewReports />} />
				</Route>
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
};

export default App;
