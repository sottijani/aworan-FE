import { Fragment, useState } from "react";
import assets from "../js/assets";

const Signup = () => {
	const [creator, setCreator] = useState("");
	const checkCreator = (e) => setCreator(e.target.checked);
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
					<label htmlFor="create" className="d-flex justify-content-center align-items-center py-2 mt-3" role="button">
						<input type="checkbox" className="border-0 me-2" id="create" onChange={checkCreator} />
						signup as a creator
					</label>
					{!creator ? (
						<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold">Signup</button>
					) : (
						<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold"> Signup as Creator</button>
					)}

					<span className="text-center d-block p-3">
						Have an account?{" "}
						<a className="text-primary" href="/#">
							Log In
						</a>
					</span>
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
