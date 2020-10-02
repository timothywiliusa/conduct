import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			{currentUser ? (
				<>
					<Link className="option" to="/dashboard">
						DASHBOARD
					</Link>
					<Link className="option" to="/contact">
						CONTACT
					</Link>
					<div className="option" onClick={() => auth.signOut()}>
						<Link to="/signout">SIGN OUT</Link>
					</div>
				</>
			) : (
				<Link className="option" to="/signin">
					Contact Support
				</Link>
			)}
		</div>
	</div>
);

export default Header;
