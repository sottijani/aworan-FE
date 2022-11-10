import { Fragment } from "react";
import assets from "../js/assets";
import { Input } from "./signup";

const Signin = () => {
	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter">
					<div className="img text-center">
						<img src={assets.logo} alt="" />
					</div>
					<p className="text-center font-700">Log in to your account to continue</p>
					<div className="row">
						<Input label="Email" type="email" id="email" />

						<Input label="Password" type="password" id="password" />
					</div>
					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white mt-5 fw-bold">Login</button>
					<span className="text-center d-block p-3">Don't have an account? Register</span>
				</form>
			</div>
		</Fragment>
	);
};

export default Signin;
