import { NavLink } from "react-router-dom";
import assets from "../js/assets.js";
const Navbar = () => {
	return (
		<>
			<div>
				<nav className="d-flex align-items-center">
					<img src={assets.logo} alt="logo" />
					<div className="ms-auto aworan-nav">
						<NavLink to="/">FAQ</NavLink>
						<NavLink to="/">Legal</NavLink>
						<NavLink to="/signin">Login</NavLink>
						<NavLink to="/">FAQ</NavLink>
						<NavLink to="/signup" className="d-bg-blue text-white round-ter" role="button">
							Register
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
