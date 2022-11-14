/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect } from "react";
import assets from "../js/assets";
import { useCustomeNavigate } from "../js/request";

const History = () => {
	const { get, remove, put } = useCustomeNavigate();
	const getAllImages = async () => {
		const res = await get("uploads/creator");
		console.log(res);
	};

	const editImage = async (id) => {
		const res = await put("uploads/" + id);
		console.log(res);
	};

	const deleteImage = async (id) => {
		const res = await remove("upload/remove" + id);
		console.log(res);
	};

	useEffect(() => {
		// getAllImages();
	}, []);

	return (
		<Fragment>
			<div className="settings">
				<p className="apt-4 mb-0 apb-4 font-700 font-22">History</p>
				<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
					<div className="tabs d-flex">
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
									{[1, 2, 3].map((e) => (
										<tr>
											<td>
												<div className="img round-ter">
													<img src={assets.preview} alt="" />
												</div>
											</td>
											<td>A Happy man</td>
											<td>Acceted</td>
											<td>Expression</td>
											<td>Date</td>
											<td>
												<div className="dropdown">
													<button className=" p-2 px-3 bg-transparent round-ter dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="fa-solid fa-ellipsis"></i>
													</button>
													<ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
														<span className="d-block font-14 dropdown-item " role="button">
															Edit Photo
														</span>
														<span className="d-block dropdown-item font-14" role="button">
															Delete Photo
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

export default History;
