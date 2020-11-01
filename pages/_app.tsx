import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "../styles/reset.css";
import "react-toastify/dist/ReactToastify.min.css";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }: AppProps) {
	ReactGA.initialize("G-BDE2GLXLNC");

	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	);
}

export default MyApp;
