import assets from "../js/assets";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="row">
				<div className="col-3  position-relative d-none d-md-block ">
					<div className="side-nav bg-white apt-10 apb-10">
						<div className="img-container rounded-circle overflow-hidden mx-auto">
							<img src={assets.avatar} alt="" />
						</div>
						<div className="text-center amt-2">
							<p className="font-700 font-22 m-0 w-100 ">Jonathan Smith</p>
							<p className="font-14 w-100">jonathansmith@gmail.com</p>
						</div>
						<div className="links amt-6 amb-6">
							<a href="/#">
								<i class="fa-solid fa-chart-line"></i> Dashboard
							</a>
							<a href="/#">
								<i class="fa-solid fa-circle-plus"></i> Create
							</a>
							<a href="/#">
								<i class="fa-solid fa-timeline"></i> Photo History
							</a>
							<a href="/#">
								<i class="fa-solid fa-credit-card"></i> Earnings
							</a>
							<a href="/#">
								<i class="fa-solid fa-gear"></i> Settings
							</a>
							<a href="/#">
								<i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
							</a>
						</div>
						<div className="logo text-center amt-6  apt-6 apb-6">
							<img src={assets.logo} alt="" className="amt-6" />
						</div>
					</div>
				</div>
				<div className="col-md-9"></div>
			</div>
		</div>
	);
};

export default Sidebar;
