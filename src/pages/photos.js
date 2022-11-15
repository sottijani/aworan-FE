/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCustomeNavigate } from "../js/request";

const Photos = () => {
	const [uploads, setUploads] = useState([]);
	const [all, setAll] = useState([]);
	const { get, remove, put } = useCustomeNavigate();

	const getAllImages = async () => {
		const { status, response } = await get("uploads");
		if (status === 200) {
			setUploads(response.data);
			setAll(response.data);
		} else toast(response.message);
	};

	const filter = (phrase) => {
		if (phrase === "") {
			setUploads(all);
			return;
		}

		const photoObj = all.filter((e) => e.status === phrase);
		if (photoObj.length) setUploads(photoObj);
	};

	useEffect(() => {
		getAllImages();
	}, []);

	return (
		<Fragment>
			<div className="settings">
				<p className="apt-4 mb-0 apb-4 font-700 font-22">History</p>
				<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
					{/* <div className="tabs d-flex">
						
					</div> */}
					<div className="tabs d-flex align-items-center">
						<span role="button" onClick={() => filter("")}>
							All
						</span>
						<span role="button" onClick={() => filter("approved")}>
							Approved
						</span>
						<span role="button" onClick={() => filter("pending")}>
							Pending
						</span>
						<span className="border-0">
							<input type="search" className=" round-ter p-3 " placeholder="Search for photo" />
						</span>
						<span className="border-0">
							<select className="round-ter p-3 ">
								<option>Select</option>
								<option>This month</option>
							</select>
						</span>
					</div>
					<div className="content container-fluid">
						<div className="row">
							<table style={{ width: "100%" }}>
								<thead>
									<tr className="text-uppercase">
										<th>Photo</th>
										<th>Title</th>
										<th>Status</th>
										<th>Category</th>
										<th>Date</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{uploads.map((e) => (
										<tr>
											<td>
												<div className="img round-ter">
													<img src={process.env.REACT_APP_CLOUD + e.img_url} alt="" />
												</div>
											</td>
											<td>{e.title}</td>
											<td>{e.status}</td>
											<td>{e.category}</td>
											<td>{e.createdAt.split("T")[0]}</td>
											<td>
												<div className="dropdown">
													<button className=" p-2 px-3 bg-transparent round-ter dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="fa-solid fa-ellipsis"></i>
													</button>
													<ul className="dropdown-menu mt-3 p-0" aria-labelledby="dropdownMenuButton1">
														<span className="d-block font-14 dropdown-item p-2 " role="button">
															View
														</span>
														<span className="d-block p-2 dropdown-item font-14" role="button">
															Approve
														</span>
													</ul>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Photos;
