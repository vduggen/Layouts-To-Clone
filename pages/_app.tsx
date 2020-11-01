import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "../styles/reset.css";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;
