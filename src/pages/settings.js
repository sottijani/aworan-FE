import { useState } from "react";
import assets from "../js/assets";

const Settings = () => {
	const [tab, setTab] = useState("profile");

	const changeTab = (v) => {
		setTab(v);
	};

	return (
		<div className="settings">
			<p className="apt-4 mb-0 apb-4 font-700 font-22">Settings</p>

			<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
				<div className="tabs d-flex">
					<span role="button" onClick={() => changeTab("profile")}>
						Profile
					</span>
					<span role="button" onClick={() => changeTab("bank")}>
						Bank
					</span>
					<span role="button" onClick={() => changeTab("security")}>
						Security
					</span>
				</div>

				{/* bank details */}
				{tab === "bank" ? (
					<div className="container-fluid  content">
						<div className="row">
							<button className="col-md-3 round-ter d-flex flex-column justify-content-center align-items-center bank bg-white" data-bs-target="#addBank" data-bs-toggle="modal">
								<i class="fa-solid fa-building-columns"></i>
								<span className="py-1">Add bank account </span>
							</button>
							<div className="col-md-3 round-ter del-bank border-0 d-flex justify-content-between flex-column">
								<p className="w-100 text-end text-danger font-400" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button">
									Delete
								</p>
								<p>
									Jonathan Smith <br />
									<small>0908 Access Bank</small>
								</p>
							</div>
						</div>
					</div>
				) : (
					""
				)}

				{/* profile details */}
				{tab === "profile" ? (
					<div className="container-fluid  content">
						<div className="row profile gap-0">
							<SetForm title="Change Profile Picture" caption="Choose a new display picture for your account" component1={<img src={assets.avatar} width="100px" alt="" />} />
							<SetForm title="Full Name" caption="Customize your account name" component1={<Input label="First Name" />} component2={<Input label="Last Name" />} />
							<SetForm title="Email Address" caption="Change your email address" component1={<Input label="Email address" />} />
							<SetForm title="Phone Number" caption="Change your Phone Number" component1={<Input label="Phone Number" />} />
							<SetForm title="Social media" caption="Add social media accounts" component1={<Input label="Twitter" />} component2={<Input label="Instagram" />} />
							<SetForm
								component1={
									<button type="button" className="d-bg-blue p-3 border-0 text-white round-ter w-50">
										Save Changes
									</button>
								}
							/>
						</div>
					</div>
				) : (
					""
				)}

				{/* security */}
				{tab === "security" ? (
					<div className="container-fluid  content">
						<div className="row profile gap-0">
							<SetForm title="Password" caption="Change your current Password" component1={<Input label="Twitter" type="password" />} />
							<SetForm
								component1={
									<button type="button" className="d-bg-blue p-3 border-0 text-white round-ter w-50">
										Save Changes
									</button>
								}
							/>
						</div>
					</div>
				) : (
					""
				)}
			</div>

			{/* modal */}
			<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key="modal">
				<div className="modal-dialog modal-dialog-centered ">
					<div className="modal-content round-ter border-0  " style={{ padding: "2rem 3.5rem" }}>
						<div className="modal-header border-0 font-700 font-22" style={{ color: " #323D59" }}>
							Delete Bank Account
						</div>
						<div className="modal-body py-4">
							<p>Are you sure you want to delete this bank account details?</p>
						</div>
						<div className="modal-header border-0 d-flex gap-3 ">
							<button className="border round-ter p-3 w-50 bg-white" data-bs-dismiss="modal">
								No, Cancel
							</button>
							<button className="bg-danger w-50 text-white round-ter p-3 border-0">Yes, Delete</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade addbank " id="addBank" tabIndex="-1" aria-labelledby="addBank" aria-hidden="true" key="bank">
				<div className="modal-dialog modal-dialog-centered ">
					<form className=" w-100 round-ter border-0 ">
						<div className="modal-content  border-0 p-4 w-75 mx-auto">
							<div className="modal-header border-0 font-700 font-22 " style={{ color: " #323D59" }}>
								Add Bank Account
							</div>
							<div className="modal-body py-3">
								<div className="py-3">
									<label className="d-block my-2">Bank</label>
									<input className="p-3" type="text" required />
								</div>
								<div className="py-3">
									<label className="d-block my-2">Account Number</label>
									<input className="p-3" type="number" required />
									<small className="text-end d-block py-3 font-500" style={{ color: "#05A86D" }}>
										Olawale Amara Galadima
									</small>
								</div>
							</div>
							<div className="modal-header border-0 d-flex gap-3 bt ">
								<button type="button" className="border round-ter p-3 w-50 bg-white" data-bs-dismiss="modal">
									No, Cancel
								</button>
								<button type="submit" className="d-bg-blue w-50 text-white round-ter p-3 border-0">
									Add Bank
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Settings;

const SetForm = ({ title, caption, component1, component2 }) => {
	return (
		<>
			<div className="col-md-3  d-flex flex-column justify-content-center pb-4 pe-5">
				<p className="m-0" style={{ color: "#323D59" }}>
					{title}
				</p>
				<small>{caption}</small>
			</div>
			<div className="col-md-4 py-4 ps-0 pe-5">{component1}</div>
			<div className="col-md-4 py-4 ps-0 pe-5">{component2}</div>
		</>
	);
};

const Input = ({ label, type = "text", ...other }) => {
	return (
		<div>
			<label className="d-block mb-2">{label}</label>
			<input type={type} className="w-100 p-3" {...other} />
		</div>
	);
};
