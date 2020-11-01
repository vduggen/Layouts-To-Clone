import { firebaseAuth, firebaseFirestore } from "../config/firebase";

interface ParamData {
	email: string;
	password: string;
}

interface SignInService {
	SignIn: (data: ParamData) => Promise<string>;
}

const SignInService: SignInService = {
	SignIn: async function ({ email, password }) {
		let status = null;

		await firebaseAuth
			.signInWithEmailAndPassword(email, password)
			.then(() => (status = "success"))
			.catch(err => {
				console.log(err);
				return (status = "error");
			});

		return status;
	},
};

export default SignInService;
