import Sidebar from "../components/Sidebar";
import { ReactComponent as Account } from "../assets/account.svg";
import { useEffect, useState } from "react";
import AuthService from "../services";

export default function Profile() {
	const service = new AuthService();
	const [showProfile, setSowProfile] = useState(true);
	const view = () => setSowProfile(!showProfile);
	const headerCss =
		"py-10 mr-10 border-0 border-2 border-transparent hover:border-b-2 hover:text-blue-500 border-collapse ";

	const getProfile = async () => {
		const res = await service.profile();
		console.log(res);
	};

	const updateProfile = async (data) => {
		const res = await service.updateProfile(data);
		console.log(res);
	};

	useEffect(() => {
		getProfile();
	});

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

	const InputForm = ({ labe1, label2, type = "text", type1 = "text" }) => (
		<>
			<div className="flex justify-center">
				<div className="w-full pr-5">
					<label className=" text-gray-400">{labe1}</label>
					<input type={type1} />
				</div>
				<div className="w-full pl-3">
					<label className=" text-gray-400">{label2}</label>
					<input type={type} />
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
									showProfile ? "border-b-2 border-b-blue-500 text-blue-500 " : ""
								}`}
								role="link"
								onClick={view}
							>
								Profile
							</button>
							<button
								className={`${headerCss} ${
									!showProfile ? "border-b-2 border-b-blue-500 text-blue-500" : ""
								}`}
								role="link"
								onClick={view}
							>
								Bank
							</button>
						</div>
						<div className="py-10 px-10 text-left">
							{showProfile ? (
								<div>
									<form>
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
											component={<InputForm labe1="First Name" label2="Last Name" />}
										/>
										<ProfileLayout
											title="Email Address Name"
											caption="Change your email address"
											component={
												<InputForm labe1="Email Address" label2="Instagram" type1="email" />
											}
										/>
										<ProfileLayout
											title="Phone Number"
											caption="Change your phone number"
											component={<InputForm labe1="Phone Number" label2="Twitter" />}
										/>

										<button
											type={updateProfile}
											className="p-5 block rounded-lg my-11 mx-auto bg-blue-500 text-white "
										>
											Save Changes
										</button>
									</form>
								</div>
							) : (
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
						</div>
					</div>
				}
			/>
		</>
	);
}
