import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.svg";
import ShowPassword from "../components/ShowPassword";
import AuthService from "../services";
export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [passwordNotMatch, setPasswordMatch] = useState("");
	const service = new AuthService();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const signUp = async (data) => {
		// console.log(JSON.stringify(data));
		console.log(data);
		if (data.password !== data.confirm_password) {
			setPasswordMatch("Password not match");
			return;
		}
		setPasswordMatch("");
		// return;
		const d = await service.signUp(data).catch((err) => console.log(err));
		console.log(d);
	};

	const changeP = (data) => {
		console.log(data);
	};
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit(signUp)} className="auth-form">
				<div>
					<label>First Name</label>
					<input {...register("first_name", { required: true })} />
					{errors.first_name && <p className="error">First name required</p>}
				</div>
				<div>
					<label>Last Name</label>
					<input {...register("last_name", { required: true })} />
					{errors.last_name && <p className="error">Last name is required</p>}
				</div>
				<div>
					<label>Email</label>
					<input
						type="text"
						{...register("email", {
							required: true,
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>
					{errors.email?.type === "required" && <p className="error">Email is required.</p>}
					{errors.email?.type === "pattern" && <p className="error">Invalid email format</p>}
				</div>
				<div>
					<label>Phone Number</label>
					<input type="number" {...register("phone_number")} />
					{errors.phone_number && <p className="error">Phone number is required</p>}
				</div>
				<div className="relative">
					<label>Password</label>
					<input
						type={showPassword ? "text" : "password"}
						{...register("password", { required: true })}
					/>
					<ShowPassword
						image={Vector}
						setShowPassword={setShowPassword}
						showPassword={showPassword}
					/>
					{errors.password && <p className="error">Password cannot be empty</p>}
				</div>
				<div className="relative">
					<label>Confirm Password</label>
					<input
						type={showPassword ? "text" : "password"}
						{...register("confirm_password", {
							required: true,
							onChange: (e) => changeP(e),
						})}
					/>
					{errors.confirm_password && <p className="error">Confirm password cannot be empty</p>}
					<p className="error">{passwordNotMatch}</p>
					<ShowPassword
						image={Vector}
						setShowPassword={setShowPassword}
						showPassword={showPassword}
					/>
				</div>
				<button className="auth-button">submit</button>
				<p className="text-center py-3">
					Already have an account?{" "}
					<Link to="/signin" className="text-blue-500">
						Sign in
					</Link>
				</p>
			</form>
		</div>
	);
}
