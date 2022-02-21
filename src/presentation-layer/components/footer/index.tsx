import './index.css';
const lang = require('presentation-layer/languages/fa');
function Footer(props: any) {
	return (
		<>
			<footer className='bg-primary text-white text-center text-lg-start'>
				<div className='text-center p-3'>
					تمامی حقوق این اثر متعلق به محصول&nbsp;
					<a className='text-white' href='#'>
						{lang['SITENAME']}
					</a>
					&nbsp;با توسعه&nbsp;
					<a
						className='text-white'
						href='https://www.linkedin.com/in/mohsenhajikarimian/'>
						محسن حاجی کریمیان
					</a>
					&nbsp;می باشد که به صورت متن باز انتشار یافته است
				</div>
			</footer>
		</>
	);
}
export default Footer;
