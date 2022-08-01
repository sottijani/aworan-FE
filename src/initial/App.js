import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../pages/contributor/Create";
import History from "../pages/contributor/History";
import Payment from "../pages/contributor/Payment";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<Signup />} key="home" />
					<Route path="/signup" element={<Signup />} key="signup" />
					<Route path="/signin" element={<Signin />} key="signin" />
					<Route path="/upload" element={<Create />} key="upload" />
					<Route path="/history" element={<History />} key="history" />
					<Route path="/profile" element={<Profile />} key="profile" />
					<Route path="/payment" element={<Payment />} key="paymemt" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
