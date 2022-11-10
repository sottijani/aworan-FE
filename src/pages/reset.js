import { Fragment } from "react";
import assets from "../js/assets";
import { Input } from "./signup";

const ResetPassword = () => {
	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter">
					<div className="img text-center">
						<img src={assets.logo} alt="" />
					</div>
					<p className="text-center font-700">Reset Password</p>
					<div className="row">
						<Input label="New Password" type="password" id="password" />
					</div>
					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white mt-5 fw-bold">Reset Password</button>
				</form>
			</div>
		</Fragment>
	);
};

export default ResetPassword;
