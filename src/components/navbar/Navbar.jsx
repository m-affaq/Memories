import React from 'react';
import logo from '../../img/logo.png';
import './navbar.css';
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<h1>Memories</h1>

				<img src={logo} className="imge" alt="imges" />
			</div>
		</div>
	);
};

export default Navbar;
