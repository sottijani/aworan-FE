import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
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
						<NavLink to="/#" className="p-5 ml-10 ">
							Login
						</NavLink>
						<NavLink to="/#" className="p-5 px-11 bg-blue-500 rounded-md text-white ml-10">
							Register
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}
