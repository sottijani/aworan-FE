import { useState } from "react";
import { useForm } from "react-hook-form";
import ShowPassword from "../components/ShowPassword";
import Vector from "../assets/Vector.svg";

export default function Signin() {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const submit = (data) => console.log("working", data);
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
			</form>
		</div>
	);
}
