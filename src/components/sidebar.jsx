/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";
import assets from "../js/assets";

const Sidebar = () => {
	const { role } = useContext(AppContext);

	const activeClass = `${({ isActive }) => (isActive ? "active" : undefined)}}`;
	const navigate = useNavigate();
	return (
		<div className="sidebar">
			<div className="row">
				<div className="col-md-2  position-relative d-none d-md-block ">
					<div className="side-nav bg-white apt-6  apb-6">
						<div className="img-container rounded-circle overflow-hidden mx-auto">
							<label htmlFor="upload" role="button">
								<img src={assets.avatar} alt="" />
							</label>
							<input type="file" accept="image/png, image/jpeg, image/jpg" id="upload" hidden />
						</div>
						<div className="text-center amt-2">
							<p className="font-700 font-22 m-0 w-100 ">Jonathan Smith</p>
							<p className="font-12 w-100">jonathansmith@gmail.com</p>
						</div>
						<div className="links amt-4">
							{role && role === "creator" ? (
								<Fragment>
									<NavLink to="/dashboard" className={activeClass} end>
										<i className="fa-solid fa-chart-line"></i> <span> Dashboard</span>
									</NavLink>
									<NavLink to="/dashboard/upload" className={activeClass}>
										<i className="fa-solid fa-circle-plus"></i>
										<span> Create</span>
									</NavLink>
									<NavLink to="/dashboard/history" className={activeClass}>
										<i className="fa-solid fa-timeline"></i> <span>Photo History</span>
									</NavLink>
									<NavLink to="/dashboard/payment" className={activeClass}>
										<i className="fa-solid fa-credit-card"></i> <span>Earnings</span>
									</NavLink>
								</Fragment>
							) : (
								<Fragment>
									<NavLink to="/" className={activeClass}>
										<i className="fa-solid fa-download"></i>
										<span>Downloads</span>
									</NavLink>
									<NavLink to="/" className={activeClass}>
										<i className="fa-solid fa-bookmark"></i>
										<span>Bookmarks</span>
									</NavLink>
									<NavLink to="/" className={activeClass}>
										<i className="fa-solid fa-heart"></i> <span>Favorites</span>
									</NavLink>
								</Fragment>
							)}

							<NavLink to="/dashboard/profile" className={activeClass}>
								<i className="fa-solid fa-gear"></i> <span>Settings</span>
							</NavLink>

							<a href="#" role="button" onClick={() => navigate("/signin")}>
								<i className="fa-solid fa-arrow-right-from-bracket"></i>
								<span>Logout</span>
							</a>
						</div>
						<div className="logo text-center amt-6">
							<img src={assets.logo} alt="" role="button" onClick={() => navigate("/")} />
						</div>
					</div>
				</div>
				<div className=" col-md-10  cont-container">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
