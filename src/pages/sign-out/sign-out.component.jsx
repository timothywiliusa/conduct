import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import './sign-out.styles.scss';

const SignOut = () => (
	<>
		<div className="sign-out">YOU ARE SIGNED OUT</div>
		<br />
		<Link to="/">
			<CustomButton>Sign Back In</CustomButton>
		</Link>
	</>
);

export default SignOut;
