import React from 'react';
import Logo from './logo/Logo';

export const Header = () => {
	return (
		<div className="header">
			<div className="header_name">
				<Logo />
			</div>

			<div className="header_nav">
				<ul>
					<li className="header_nav-item">
						<a href="#services">Services</a>
					</li>
					<li className="header_nav-item">
						<a href="#portfolio">portfolio</a>
					</li>
					<li className="header_nav-item">
						<a href="#experiences">experiences</a>
					</li>
					<li className="header_nav-item">
						<a href="#contact">contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
