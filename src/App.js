import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import preloader from './assets/images/preloader.gif';
import DefaultLayout from './layout/DefaultLayout';
import AddBill from './views/pages/add-bill';
import Bills from './views/pages/bills';
import SignUp from './views/pages/sign-up';
import ViewReports from './views/pages/view-reports';
import Welcome from './views/pages/welcome';

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
					<Route path='analytics/view-reports' element={<ViewReports />} />
					<Route path='welcome' element={<Welcome />} />
					<Route path='purchases/bills' element={<Bills />} />
				</Route>
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>
	);
};

export default App;
