import assets from "../js/assets.js";
const Navbar = () => {
	return (
		<>
			<div>
				<nav className="d-flex align-items-center">
					<img src={assets.logo} alt="logo" />
					<div className="ms-auto aworan-nav">
						<a href="/#">FAQ</a>
						<a href="/#">Legal</a>
						<a href="/#">Login</a>
						<a href="/#" className="d-bg-blue text-white round-ter" role="button">
							Register
						</a>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
