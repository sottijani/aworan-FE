import { Fragment } from "react";
import assets from "../js/assets";

const Signup = () => {
	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter">
					<div className="img text-center">
						<img src={assets.logo} alt="" />
					</div>
					<p className="text-center font-700">Sign Up to get Started</p>
					<div className="row" gap-2>
						<div className="col-md-6">
							<Input label="First Name" id="firstName" />
						</div>
						<div className="col-md-6">
							<Input label="Last Name" id="lastName" />
						</div>
						<div className="col-12">
							<Input label="Email" type="email" id="email" />
							<Input label="Phone Number" type="number" id="phone" />
							<Input label="Password" type="password" id="password" />
						</div>
					</div>
					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white mt-5 fw-bold">Signup</button>
					<span className="text-center d-block p-3">Have an account? Log In</span>
				</form>
			</div>
		</Fragment>
	);
};

export default Signup;

export const Input = ({ label, type = "text", id, ...others }) => (
	<div className="py-3">
		<label className="d-block mb-1" htmlFor={id}>
			{label}
		</label>
		<input type={type} {...others} className="w-100 round-ter p-3" id={id} />
	</div>
);
