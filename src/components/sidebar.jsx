import assets from "../js/assets";
import Dashboard from "../pages/dashboard";
// import Create from "../pages/create";
// import History from "../pages/history";
// import Payment from "../pages/payment";
// import Settings from "../pages/settings";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="row">
				<div className="col-2  position-relative d-none d-md-block ">
					<div className="side-nav bg-white apt-6  apb-6">
						<div className="img-container rounded-circle overflow-hidden mx-auto">
							<img src={assets.avatar} alt="" />
						</div>
						<div className="text-center amt-2">
							<p className="font-700 font-22 m-0 w-100 ">Jonathan Smith</p>
							<p className="font-12 w-100">jonathansmith@gmail.com</p>
						</div>
						<div className="links amt-4">
							<a href="/#">
								<i class="fa-solid fa-chart-line"></i> <span> Dashboard</span>
							</a>
							<a href="/#">
								<i class="fa-solid fa-circle-plus"></i>
								<span> Create</span>
							</a>
							<a href="/#">
								<i class="fa-solid fa-timeline"></i> <span>Photo History</span>
							</a>
							<a href="/#">
								<i class="fa-solid fa-credit-card"></i> <span>Earnings</span>
							</a>
							<a href="/#">
								<i class="fa-solid fa-gear"></i> <span>Settings</span>
							</a>
							<a href="/#">
								<i class="fa-solid fa-arrow-right-from-bracket"></i>
								<span>Logout</span>
							</a>
						</div>
						<div className="logo text-center amt-6  ">
							<img src={assets.logo} alt="" className="" />
						</div>
					</div>
				</div>
				<div className="col-md-10 cont-container">
					{/* <Settings /> */}
					{/* <Create /> */}
					{/* <History /> */}
					{/* <Payment /> */}
					<Dashboard />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
