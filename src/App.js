import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
import SignIn from './pages/sign-in/sign-in.component';
import Header from './components/header/header.component.jsx';
import SignOut from './pages/sign-out/sign-out.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		//user authentication
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			createUserProfileDocument(user);
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={SignIn} />
					{/* <Route path="/shop" component={ShopPage} /> */}
					<Route path="/signout" component={SignOut} />
				</Switch>
			</div>
		);
	}
}

export default App;
