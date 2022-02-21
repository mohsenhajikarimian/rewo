import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const lang = require('presentation-layer/languages/fa');
function Navbar(props: any) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<a className='navbar-brand' href='/' style={{ lineHeight: '42px', padding: '10px' }}>
				<img
					src={process.env.PUBLIC_URL + '/logo/logo512.png'}
					width='72'
					style={{
						width: 'auto',
						maxHeight: '28px',
						margin: '5px',
						marginTop: '8px',
						borderRadius: '10px',
					}}
					className='d-inline-block align-top'
					alt=''
				/>
				{lang['SITENAME']}
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='/'>
							{lang['PAGE']['HOME']}{' '}
							<span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/posts'>
							{lang['PAGE']['POSTS']}
						</a>
					</li>
					{/* <li className='nav-item'>
						<a className='nav-link' href='/shop'>
							{lang['PAGE']['SHOP']}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/login'>
							{lang['PAGE']['LOGIN']}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/register'>
							{lang['PAGE']['REGISTER']}
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/logout'>
							{lang['PAGE']['LOGOUT']}
						</a>
					</li> */}
				</ul>
				{/* <form className='d-flex input-group w-auto'>
					<input
						type='search'
						className='form-control rounded'
						placeholder='جستجو'
						aria-label='Search'
						aria-describedby='search-addon'
					/>
					<span className='input-group-text border-0' id='search-addon'>
						<FontAwesomeIcon icon={faSearch} />
					</span>
				</form> */}
			</div>
		</nav>
		// <nav className="navbar navbar-light bg-light">
		//         <div className="container-fluid">
		//                 <a className="navbar-brand">{lang["SITENAME"]}</a>
		//                 <form className="d-flex input-group w-auto">
		//                         <input
		//                                 type="search"
		//                                 className="form-control rounded"
		//                                 placeholder="جستجو"
		//                                 aria-label="Search"
		//                                 aria-describedby="search-addon"
		//                         />
		//                         <span className="input-group-text border-0" id="search-addon">
		//                                 <FontAwesomeIcon icon={faSearch} />
		//                         </span>
		//                 </form>
		//         </div>
		// </nav>
	);
}
export default Navbar;
