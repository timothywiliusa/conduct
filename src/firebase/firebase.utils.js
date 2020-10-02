import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAw4QUanePOT7YmfxXCiRzsRdp9n6YjXWQ',
	authDomain: 'trisakti-mg.firebaseapp.com',
	databaseURL: 'https://trisakti-mg.firebaseio.com',
	projectId: 'trisakti-mg',
	storageBucket: 'trisakti-mg.appspot.com',
	messagingSenderId: '46891683449',
	appId: '1:46891683449:web:248d1c013cbc2133ca8ea8',
	measurementId: 'G-0WRM9FW735'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	console.log('at createUserProfileDocument');
	if (!userAuth) return;

	const userRef = firestore.doc(`/users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}

		return userRef;
	}
	console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
