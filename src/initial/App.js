import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context/UserContext";
import Create from "../pages/contributor/Create";
import Dasboard from "../pages/contributor/Dashboard";
import History from "../pages/contributor/History";
import Payment from "../pages/contributor/Payment";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function App() {
	return (
		<>
			<UserProvider
				container={
					<BrowserRouter>
						<div>
							<Routes>
								<Route path="/" element={<Home />} key="home" />
								<Route path="/signup" element={<Signup />} key="signup" />
								<Route path="/signin" element={<Signin />} key="signin" />
								<Route path="/upload" element={<Create />} key="upload" />
								<Route path="/history" element={<History />} key="history" />
								<Route path="/profile" element={<Profile />} key="profile" />
								<Route path="/payment" element={<Payment />} key="paymemt" />
								<Route path="/dashboard" element={<Dasboard />} key="dashboard" />
							</Routes>
						</div>
					</BrowserRouter>
				}
			/>
			<ToastContainer hideProgressBar closeOnClick closeButton={false} autoClose={5000} />
		</>
	);
}

export default App;
