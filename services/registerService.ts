import { firebaseFirestore } from "../config/firebase";

interface RegisterService {
	CreateLayout: (data: object) => Promise<string>;
}

const RegisterService: RegisterService = {
	CreateLayout: async function (data) {
		let status = "";

		await firebaseFirestore
			.collection("layouts")
			.add(data)
			.then(() => (status = "success"))
			.catch(() => (status = "error"));

		return status;
	},
};

export default RegisterService;
