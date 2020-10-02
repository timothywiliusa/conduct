import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ username: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">Trisakti-MG</h2>
				<span>Sign in with your username and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="username"
						type="username"
						handleChange={this.handleChange}
						value={this.state.username}
						label="username"
						required
					/>

					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="password"
						required
					/>
					<CustomButton type="submit"> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
