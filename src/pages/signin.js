import { Fragment, useState } from "react";
import assets from "../js/assets";
import { Input } from "./signup";

const Signin = () => {
	const [creator, setCreator] = useState("");
	const checkCreator = (e) => setCreator(e.target.checked);
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
					<label htmlFor="create" className="d-flex justify-content-center align-items-center py-2 mt-3" role="button">
						<input type="checkbox" className="border-0 me-2" id="create" onChange={checkCreator} />
						login as a creator
					</label>
					{!creator ? (
						<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold">Login</button>
					) : (
						<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold">Login as a Creator </button>
					)}
					<span className="text-center d-block p-3">
						Don't have an account?{" "}
						<a href="/#" role="button" className="text-primary">
							Register
						</a>
					</span>
				</form>
			</div>
		</Fragment>
	);
};

export default Signin;
