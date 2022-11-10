import { Fragment } from "react";
import assets from "../js/assets";
import { Input } from "./signup";

const ForgotPassword = () => {
	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter">
					<div className="img text-center">
						<img src={assets.logo} alt="" />
					</div>
					<p className="text-center font-700">Forgot Password</p>
					<div className="row">
						<Input label="Email" type="email" id="email" />
					</div>
					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white mt-5 fw-bold">Forgot Password</button>
				</form>
			</div>
		</Fragment>
	);
};

export default ForgotPassword;
