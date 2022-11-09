const Settings = () => {
	return (
		<div className="settings">
			<p className="apt-4 mb-0 apb-4 font-700 font-22">Settings</p>

			<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
				<div className="tabs d-flex">
					<span role="button">Profile</span>
					<span role="button">Bank</span>
					<span role="button">Security</span>
				</div>

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
			</div>

			<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key="modal">
				<div className="modal-dialog modal-dialog-centered ">
					<div className="modal-content round-ter border-0  " style={{ padding: "2rem 3.5rem" }}>
						<div className="modal-header border-0 font-700 font-22">Delete Bank Account</div>
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
						<div className="modal-content  border-0 p-5 w-75 mx-auto">
							<div className="modal-header border-0 font-700 font-22 ">Add Bank Account</div>
							<div className="modal-body py-3">
								<div className="py-3">
									<label className="d-block my-2">Bank</label>
									<input className="p-3" type="text" required />
								</div>
								<div className="py-3">
									<label className="d-block my-2">Account Number</label>
									<input className="p-3" type="number" required />
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
