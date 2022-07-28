import { useState } from "react";
import { useForm } from "react-hook-form";
import Vector from "../assets/Vector.svg";
import ShowPassword from "../components/ShowPassword";
export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const submit = (data) => console.log("working", data);
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit(submit)} className="auth-form">
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
					<input type="email" {...register("email", { required: true })} />
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
						{...register("confirm_password", { required: true })}
					/>
					{errors.confirm_password && <p className="error">Confirm password cannot be empty</p>}
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
