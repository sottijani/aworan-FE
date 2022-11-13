import { Fragment, useState } from "react";
import assets from "../js/assets";
import httpClient from "../js/request";
import { Input } from "./signup";

const Signin = () => {
	const [creator, setCreator] = useState("");
	const [data, setData] = useState({});
	const checkCreator = (e) => setCreator(e.target.checked);
	const handleInput = (ev) => {
		setData({ ...data, [ev.target.name]: ev.target.value });
	};

	const login = (ev) => {
		ev.preventDefault();
		const { post } = httpClient;
		const res = post("sigin", data);
		console.log(res);
	};

	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter" onSubmit={login}>
					<div className="img text-center">
						<img src={assets.logo} alt="" />
					</div>
					<p className="text-center font-700">Log in to your account to continue</p>
					<div className="row">
						<Input label="Email" type="email" id="email" name="email" onChange={handleInput} />

						<Input label="Password" type="password" id="password" name="password" onChange={handleInput} />
					</div>
					<label htmlFor="create" className="d-flex justify-content-center align-items-center py-2 mt-3" role="button">
						<input type="checkbox" className="border-0 me-2" id="create" onChange={checkCreator} />
						login as a creator
					</label>

					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold">{!creator ? "Login" : "Login as Creator"}</button>

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
