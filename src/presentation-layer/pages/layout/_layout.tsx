import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './_layout.css';
import Navbar from 'presentation-layer/components/navbar';
import Footer from 'presentation-layer/components/footer';
const Layout = ({ children }: any) => {
	return (
		<div className='layout'>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</div>
	);
};
export default Layout;
