/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import assets from "../js/assets";
import { baseUrl, useCustomeNavigate } from "../js/request";

const History = () => {
	const { get, remove, put } = useCustomeNavigate();
	const [uploads, setUploads] = useState([]);
	const [isChanged, setIsChanged] = useState(false);
	const [id, setId] = useState("");

	// const cloudinaryUrl = "https://res.cloudinary.com/dd1zbrj8l/image/upload/c_thumb,w_100,h_50,g_face/v1660036816/";
	const getAllImages = async () => {
		const { status, response } = await get("uploads/creator");
		if (status === 200) setUploads(response.data);
		else toast(response.message);
	};

	const editImage = async (id) => {
		const res = await put("uploads/" + id);
		console.log(res);
	};

	const deleteImage = async () => {
		console.log(id);
		const { status, response } = await remove("upload/remove/" + id);
		toast(response.message);
		if (status === 200) setIsChanged(!isChanged);
	};

	useEffect(() => {
		getAllImages();
	}, [isChanged]);

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
														<i className="fa-solid fa-ellipsis" onClick={() => setId(e.id)}></i>
													</button>
													<ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
														<span className="d-block font-14 dropdown-item " role="button">
															Edit Photo
														</span>
														<span className="d-block dropdown-item font-14" role="button" onClick={deleteImage}>
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
