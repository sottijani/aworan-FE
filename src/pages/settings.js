/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AppContext from "../context/appContext";
import assets from "../js/assets";
import { useCustomeNavigate } from "../js/request";

const Settings = () => {
	const { token } = useContext(AppContext);
	const [tab, setTab] = useState("profile");
	const [data, setData] = useState({});
	const [userData, setUserData] = useState({});
	const { put, get } = useCustomeNavigate();
	const changeTab = (v) => {
		setTab(v);
	};

	const handleInput = (ev) => {
		setData({ ...data, [ev.target.name]: ev.target.value });
	};

	const updateProfile = async (ev) => {
		ev.preventDefault();
		if (Object.keys(data).length) {
			const { status, response } = await put("user", data, token);
			toast(response.message);
			if (status === 200) console.log(response);
		}
	};

	const changePassword = async (ev) => {
		ev.preventDefault();

		if (Object.keys(data).length) {
			console.log(data);
			const { status, response } = await put("user/password", data, token);
			toast(response.message);
			if (status === 200) {
				document.getElementById("password").value = "";
				console.log(response);
			}
		}
	};

	const getProfile = async () => {
		const { status, response } = await get("profile", token);
		if (status === 200) setUserData(response.data);
	};

	// eslint-disable-next-line no-unused-vars
	const uploadPic = async () => {
		const formData = new FormData();
		formData.append("img", "");
		const res = await fetch("profile/pic", {
			method: "PUT",
			headers: {},
			body: formData,
		});
		const result = await res.json();
		console.log(result);
	};

	useEffect(() => {
		getProfile();
	}, []);

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
								<i className="fa-solid fa-building-columns"></i>
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
					<form onSubmit={updateProfile}>
						<div className="container-fluid  content">
							<div className="row profile gap-0">
								<SetForm title="Change Profile Picture" caption="Choose a new display picture for your account" component1={<img src={assets.avatar} width="100px" alt="" />} />

								<SetForm
									title="Full Name"
									caption="Customize your account name"
									component1={<Input label="First Name" name="first_name" defaultValue={userData.first_name} onChange={handleInput} />}
									component2={<Input label="Last Name" name="last_name" defaultValue={userData.last_name} onChange={handleInput} />}
								/>

								<SetForm
									title="Email Address"
									caption="Change your email address"
									component1={<Input label="Email address" name="email" defaultValue={userData.email} onChange={handleInput} disabled />}
								/>

								<SetForm
									title="Phone Number"
									caption="Change your Phone Number"
									component1={<Input label="Phone Number" type="number" name="phone" defaultValue={userData.phone} onChange={handleInput} />}
								/>

								<SetForm
									title="Social media"
									caption="Add social media accounts"
									component1={<Input label="Twitter" name="twitter" />}
									component2={<Input label="Instagram" name="instagram" onChange={handleInput} />}
								/>

								<SetForm
									component1={
										<button type="submit" className="d-bg-blue p-3 border-0 text-white round-ter w-50">
											Save Changes
										</button>
									}
								/>
							</div>
						</div>
					</form>
				) : (
					""
				)}

				{/* security */}
				{tab === "security" ? (
					<form onSubmit={changePassword}>
						<div className="container-fluid  content">
							<div className="row profile gap-0">
								<SetForm title="Password" caption="Change your current Password" component1={<Input label="Password" type="password" name="password" id="password" onChange={handleInput} />} />
								<SetForm
									component1={
										<button type="submit" className="d-bg-blue p-3 border-0 text-white round-ter w-50">
											Save Changes
										</button>
									}
								/>
							</div>
						</div>
					</form>
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
