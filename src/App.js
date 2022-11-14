import Sidebar from "./components/sidebar";
// import ForgotPassword from "./pages/forgot-password";
// import ResetPassword from "./pages/reset";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/settings";
import Create from "./pages/create";
import History from "./pages/history";
import Payment from "./pages/payment";
import Dashboard from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/dashboard" element={<Sidebar />}>
					<Route index element={<Dashboard />} />
					<Route path="profile" element={<Settings />} />
					<Route path="upload" element={<Create />} />
					<Route path="history" element={<History />} />
					<Route path="payment" element={<Payment />} />
				</Route>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />

				{/* <Signup /> */}
				{/* <Signin /> */}
				{/* <ResetPassword /> */}
				{/* <ForgotPassword /> */}
				{/* <Navbar />
			<HomePage />
			<Footer /> */}
			</Routes>

			<ToastContainer autoClose={5000} hideProgressBar={true} newestOnTop={true} closeOnClick />
		</Fragment>
	);
}

export default App;
