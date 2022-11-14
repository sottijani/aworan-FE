import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/appContext.js";
import assets from "../js/assets.js";
const Navbar = () => {
	const { login } = useContext(AppContext);
	return (
		<>
			<div>
				<nav className="d-flex align-items-center">
					<img src={assets.logo} alt="logo" />
					<div className="ms-auto aworan-nav">
						<NavLink to="/">Legal</NavLink>
						<NavLink to="/">FAQ</NavLink>
						{login ? (
							<Fragment>
								<NavLink to="/dashboard/profile">
									<img src={assets.avatar} alt="profile button" width="50rem" />
								</NavLink>
							</Fragment>
						) : (
							<Fragment>
								<NavLink to="/signin">Login</NavLink>
								<NavLink to="/signup" className="d-bg-blue text-white round-ter" role="button">
									Register
								</NavLink>
							</Fragment>
						)}
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
