/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import assets from "../js/assets";
import { useCustomeNavigate } from "../js/request";

const Signup = () => {
	const navigate = useNavigate();
	const [creator, setCreator] = useState("");
	const [roles, setRoles] = useState({});
	const [data, setData] = useState({});
	const { post, get } = useCustomeNavigate();
	const checkCreator = (e) => setCreator(e.target.checked);
	const handleInput = (ev) => {
		setData({ ...data, [ev.target.name]: ev.target.value });
	};

	const getRoles = async () => {
		const { status, response } = await get("roles");
		const v = {};
		if (status === 200) for (let i of response.data) v[i.role_title] = i.id;
		setRoles(v);
	};
	const register = async (ev) => {
		ev.preventDefault();
		const sentData = data;
		if (creator) sentData.primary_role = roles.creator;
		else sentData.primary_role = roles.user;
		const { response, status } = await post("signup", sentData);
		toast(response.message);
		if (status === 200) {
			navigate("/signin", { replace: true });
		}
	};

	useEffect(() => {
		getRoles();
	}, []);
	return (
		<Fragment>
			<div className="auth">
				<form className="bg-white round-ter" onSubmit={register}>
					<div className="img text-center">
						<img src={assets.logo} alt="" role="button" onClick={() => navigate("/")} />
					</div>
					<p className="text-center font-700">Sign Up to get Started</p>
					<div className="row" gap-2>
						<div className="col-md-6">
							<Input label="First Name" id="firstName" name="first_name" onChange={handleInput} required />
						</div>
						<div className="col-md-6">
							<Input label="Last Name" id="lastName" name="last_name" onChange={handleInput} required />
						</div>
						<div className="col-12">
							<Input label="Email" type="email" id="email" name="email" onChange={handleInput} required />
							<Input label="Phone Number" type="number" id="phone" name="phone" onChange={handleInput} />
							<Input label="Password" type="password" id="password" name="password" onChange={handleInput} required />
						</div>
					</div>
					<label htmlFor="create" className="d-flex justify-content-center align-items-center py-2 mt-3" role="button">
						<input type="checkbox" className="border-0 me-2" id="create" onChange={checkCreator} />
						signup as a creator
					</label>

					<button className="round-ter p-3 d-bg-blue border-0 w-100 text-white my-3 fw-bold">{!creator ? "Signup" : "Signup as Creator"}</button>

					<span className="text-center d-block p-3">
						Have an account?{" "}
						<Link className="text-primary" to="/signin">
							Log In
						</Link>
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
