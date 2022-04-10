import { Outlet } from 'react-router-dom';
import AppHeader from '../components/appHeader';
import AppSidebar from '../components/appSidebar';

const DefaultLayout = () => {
	return (
		<div>
			<AppSidebar />
			<div className='ml-[230px]'>
				<AppHeader />
				<div className='py-8'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
