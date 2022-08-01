import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ShowPassword from "../components/ShowPassword";
import Vector from "../assets/Vector.svg";
import AuthService from "../services";
import { useNavigate } from "react-router-dom";

export default function Signin() {
	const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState("");
	const history = useNavigate();
	const service = new AuthService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const submit = async (data) => {
		const res = await service.signIn(data);
		if (res.token) {
			localStorage.setItem("token", res.token);
			history("/profile");
		}
		setMessage(res.message);
		console.log(res);
	};

	useEffect(() => {
		localStorage.removeItem("token");
	}, []);

	return (
		<div className="form-container">
			<form className="auth-form" onSubmit={handleSubmit(submit)}>
				<div>
					<label>Email</label>
					<input
						type="email"
						{...register("email", {
							required: true,
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>
					{errors.email?.type === "required" && <p className="error">Email is required.</p>}
					{errors.email?.type === "pattern" && <p className="error">Invalid email format</p>}
				</div>
				<div className="relative">
					<label>Password</label>
					<input
						type={showPassword ? "text" : "password"}
						{...register("password", { required: true })}
					/>
					{errors.password && <p className="error">Password is required.</p>}
					<ShowPassword
						image={Vector}
						setShowPassword={setShowPassword}
						showPassword={showPassword}
					/>
				</div>
				<button className="auth-button">submit</button>
				{message && (
					<p className="rounded text-white capitalize bg-red-500 my-2 py-5 text-center">
						{message}
					</p>
				)}
			</form>
		</div>
	);
}
