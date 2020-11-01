import { toast } from "react-toastify";

interface NotificationService {
	Notification: (message: string, type?: string) => any;
}

const NotificationService: NotificationService = {
	Notification: (message, type) => {
		switch (type) {
			case "success":
				return toast.success(message, {
					position: toast.POSITION.TOP_RIGHT,
				});
			case "warning":
				return toast.warn(message, {
					position: toast.POSITION.TOP_RIGHT,
				});
			default:
				return toast.error(message, {
					position: toast.POSITION.TOP_RIGHT,
				});
		}
	},
};

export default NotificationService;
