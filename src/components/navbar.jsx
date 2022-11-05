import assets from "../js/assets.js";
const Navbar = () => {
	return (
		<>
			<div>
				<nav>
					<img src={assets.logo} alt="logo" />
					<div>
						<a href="/#">FAQ</a>
						<a href="/#">Legal</a>
						<a href="/#">Login</a>
						<a href="/#">Register</a>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
