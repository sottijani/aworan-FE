import Sidebar from "../components/Sidebar.js";
import { ReactComponent as Account } from "../assets/account.svg";
import { useEffect, useState } from "react";
import AuthService from "../services";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Profile() {
	const service = new AuthService();
	const [showProfile, setSowProfile] = useState("profile");
	const [profile, setProfile] = useState({});
	const [profileUpdates, setProfileUpdates] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });
	const headerCss =
		"py-10 mr-10 border-0 border-2 border-transparent hover:border-b-2 hover:text-blue-500 border-collapse ";

	const view = (v) => () => setSowProfile(v);
	const getProfile = async () => {
		const res = await service.profile();
		console.log(res);
		if (res.status) {
			const {
				data: { data: result },
			} = res;
			setProfile(result);
		} else console.log(res.message);
	};

	const updateProfile = async (data) => {
		const res = await service.updateProfile(data);
		toast.info(res.message);
		setProfileUpdates(!profileUpdates);
	};

	useEffect(() => {
		getProfile();
	}, [profileUpdates]);

	const ProfileLayout = ({ title, caption, component }) => (
		<>
			<div className="flex flex-1 item-center p-2 pb-5 text-left ">
				<div className="flex items-center w-full">
					<div className="w-1/4">
						<p>{title}</p>
						<span className="text-gray-400">{caption}</span>
					</div>
					<div className="w-3/4">{component}</div>
				</div>
			</div>
		</>
	);

	const InputForm = ({
		labe1,
		label2,
		type = "text",
		type1 = "text",
		defaultVal = "",
		defaultVal2,
		name1,
		name2 = "",
		readOnly1 = false,
		readOnly2 = false,
	}) => (
		<>
			<div className="flex justify-center">
				<div className="w-full pr-5">
					<label className=" text-gray-400">{labe1}</label>
					{name1 && (
						<input
							type={type1}
							defaultValue={defaultVal}
							{...register(name1)}
							readOnly={readOnly1}
						/>
					)}
				</div>
				<div className="w-full pl-3">
					<label className=" text-gray-400">{label2}</label>
					{name2 && (
						<input
							type={type}
							defaultValue={defaultVal2}
							{...register(name2)}
							readOnly={readOnly2}
						/>
					)}
				</div>
			</div>
		</>
	);

	return (
		<>
			<Sidebar
				title="Settings"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="shadow-sm flex justify-start items-center px-10">
							<button
								className={`${headerCss} ${
									showProfile === "profile" ? "border-b-2 border-b-blue-500 text-blue-500 " : ""
								}`}
								role="link"
								onClick={view("profile")}
							>
								Profile
							</button>
							<button
								className={`${headerCss} ${
									showProfile === "bank" ? "border-b-2 border-b-blue-500 text-blue-500" : ""
								}`}
								role="link"
								onClick={view("bank")}
							>
								Bank
							</button>
							<button
								className={`${headerCss} ${
									showProfile === "security" ? "border-b-2 border-b-blue-500 text-blue-500" : ""
								}`}
								role="link"
								onClick={view("security")}
							>
								Securiity
							</button>
						</div>
						{Object.keys(profile).length ? (
							<div className="py-10 px-10 text-left">
								{showProfile === "profile" && (
									<div>
										<form onSubmit={handleSubmit(updateProfile)}>
											<ProfileLayout
												title="Change Profile Picture"
												caption="choose a new dislplay picture for your account"
												component={
													<div className="h-32 w-32 overflow-hidden rounded-full">
														<img
															src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd16kd6gzalkogb.cloudfront.net%2Fmagazine_images%2FVancouver-Art-Gallery-via-Tourism-Vancouver.jpg&f=1&nofb=1"
															alt=""
															className="w-full h-full object-cover cursor-pointer"
														/>
													</div>
												}
											/>
											<ProfileLayout
												title="Full Name"
												caption="cutomize your account name"
												component={
													<InputForm
														labe1="First Name"
														label2="Last Name"
														defaultVal={profile?.first_name}
														defaultVal2={profile?.last_name}
														name1="first_name"
														name2="last_name"
													/>
												}
											/>
											<ProfileLayout
												title="Email Address Name"
												caption="Change your email address"
												component={
													<InputForm
														labe1="Email Address"
														label2="Instagram"
														type1="email"
														defaultVal={profile?.email}
														defaultVal2={profile?.instagram}
														name1="email"
														name2="instagram"
														readOnly1={true}
													/>
												}
											/>
											<ProfileLayout
												title="Phone Number"
												caption="Change your phone number"
												component={
													<InputForm
														labe1="Phone Number"
														label2="Twitter"
														defaultVal={profile?.phone}
														defaultVal2={profile?.twitter}
														name1="phone"
														name2="twitter"
													/>
												}
											/>

											<button
												type="submit"
												className="p-5 block rounded-lg my-11 mx-auto bg-blue-500 text-white "
											>
												Save Changes
											</button>
										</form>
									</div>
								)}
								{showProfile === "bank" && (
									<div className="flex flex-wrap">
										<div className="mb-5 mr-5 w-3/12 text-center p-11 rounded-lg border-2 border-gray-200 cursor-pointer">
											<Account className="mx-auto" />
											<p className="text-blue-500">Add bank account</p>
										</div>
										<div className="w-3/12 mb-5 mr-5 relative p-11 rounded-lg border-2 border-transparent bg-gray-200 ">
											<button arial-role="button" className="text-red-500 absolute top-5 right-5 ">
												Delete
											</button>
											<div className="absolute bottom-5 left-5">
												<p className="text-gray-500">Jonathan Smith</p>
												<p className="text-gray-400">0093858338 Access Bank</p>
											</div>
										</div>
									</div>
								)}
								{showProfile === "security" && (
									<div>
										<form onSubmit={handleSubmit(updateProfile)}>
											<ProfileLayout
												title="Change Password"
												caption="change your password"
												component={<InputForm labe1="Password" name1="password" />}
											/>
											<button
												type="submit"
												className="p-5 block rounded-lg my-5  bg-blue-500 text-white "
											>
												Save Changes
											</button>
										</form>
									</div>
								)}
							</div>
						) : (
							<p className="py-10 text-2xl">Loading</p>
						)}
					</div>
				}
			/>
		</>
	);
}
