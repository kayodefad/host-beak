import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/appHeader';
import AppSidebar from '../components/appSidebar';

const DefaultLayout = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<div>
			<AppSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
			<div className='md:ml-[250px] overflow-hidden'>
				<AppHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
