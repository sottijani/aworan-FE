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
					<Route path="/" element={<Signup />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/upload" element={<Create />} />
					<Route path="/history" element={<History />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/payment" element={<Payment />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
