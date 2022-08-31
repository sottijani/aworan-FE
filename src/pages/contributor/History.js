import { useEffect, useId, useRef, useState } from "react";
import { toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import Contributor from "../../services/contributor.service";

export default function History() {
	const tableHeading = ["Photo", "Title", "Status", "Category", "Date", ""];
	const [history, setHistory] = useState([]);
	const service = new Contributor();
	const divRev = useRef();
	const cloudinaryUrl =
		"https://res.cloudinary.com/dd1zbrj8l/image/upload/c_thumb,w_100,h_50,g_face/v1660036816/";
	const id = useId();

	const getAllUploads = async () => {
		const {
			data: { data: res, message: mess },
		} = await service.getUpload("dkksk");
		// toast(mess);
		setHistory(res);
		console.log(res);
	};
	useEffect(() => {
		getAllUploads();
	}, []);

	const deleteImage = (id) => async () => {
		const res = await service.deleteUpload(id);
		if (res.message === "image Deleted") document.getElementById(id).style.display = "none";
		toast(res.message);
	};

	return (
		<>
			<Sidebar
				title="History"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="py-10 shadow-sm flex justify-start items-center px-10">
							<input type="search" placeholder="search for photos" className="w-80 mr-11" />
							<select className="w-52">
								<option>month</option>
								<option>ello</option>
							</select>
						</div>
						<div className="py-10 px-10 text-left">
							{history.length ? (
								<>
									<div className="flex flex-nowrap item-center p-2 text-left overflow-x-auto">
										{tableHeading.map((x) => (
											<p className="  flex-1 uppercase text-gray-400">{x}</p>
										))}
									</div>
									{history.map((e) => (
										<>
											<div
												className="flex flex-nowrap item-center p-2 text-left overflow-x-auto"
												id={e.id}
												key={id + e.id}
											>
												<div className="flex-1 ">
													<div className="w-2/4 p-2">
														<img
															src={cloudinaryUrl + e.img_url}
															alt={e.category}
															className="w-fit rounded object-cover"
														/>
													</div>
												</div>
												{/* <p className="flex-1 ">{e.img_url}</p> */}
												<p className="flex-1 ">{e.title}</p>
												<p className="flex-1 ">{+e.approved ? "approved" : "pending"}</p>
												<p className="flex-1 ">{e.category}</p>
												<p className="flex-1 ">{e.createdAt.split("T")[0]}</p>
												<p className="flex-1 text-center ">
													<span
														role="button"
														className="p-3 cursor-pointer"
														onClick={deleteImage(e.id)}
													>
														Delete
													</span>{" "}
													<span className="cursor-pointer p-3" role="button">
														Edit
													</span>{" "}
												</p>
											</div>
										</>
									))}
								</>
							) : (
								"Loadings"
							)}
						</div>
					</div>
				}
			/>
		</>
	);
}
