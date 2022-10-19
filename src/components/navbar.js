import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import UserContext from "../context/UserContext";
export default function Navbar() {
	const { user: profile } = useContext(UserContext);
	console.log(profile);
	// const
	return (
		<>
			<div className="">
				<div className="container mx-auto flex items-center justify-between">
					<div>
						<img src={logo} alt="logo" />
					</div>
					<div>
						<NavLink to="/#" className="p-5 ml-10">
							Home
						</NavLink>
						<NavLink to="/#" className=" p-5 ml-10">
							Legal
						</NavLink>
						{!profile.id ? (
							<>
								<NavLink to="/signin" className="p-5 ml-10 ">
									Sign In
								</NavLink>
								<NavLink to="/signup" className="p-5 px-11 bg-blue-500 rounded-md text-white ml-10">
									Register
								</NavLink>
							</>
						) : (
							<>
								<NavLink to="/profile" className="p-5 px-11   ml-10">
									Profile
								</NavLink>
								<NavLink to="/signin" className="p-5 px-11 bg-red-500 rounded-md text-white ml-10">
									Sign Out
								</NavLink>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
