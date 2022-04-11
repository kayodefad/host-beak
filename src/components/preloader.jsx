import preloader from '../assets/images/preloader.gif';

const preloaderStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',
};

const Preloader = () => {
	return (
		<div style={preloaderStyle}>
			<img src={preloader} alt='preloader' />
			<p>Loading...</p>
		</div>
	);
};

export default Preloader;
