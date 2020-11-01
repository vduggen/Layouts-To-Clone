import { firebaseFirestore } from "../config/firebase";

interface ILayoutService {
	GetLayouts: () => any;
}

const LayoutService: ILayoutService = {
	GetLayouts: async function () {
		let data = [];

		let querySnapshot = await firebaseFirestore
			.collection("layouts")
			.orderBy("level", "asc")
			.get();

		querySnapshot.forEach(doc => {
			data.push(doc.data());
		});

		return data;
	},
};

export default LayoutService;
