import Sidebar from "../../components/Sidebar";
import uploadIcon from "../../assets/upload.svg";
import { useState } from "react";
import Contributor from "../../services/contributor.service";
export default function Create() {
	const [preview, setPreview] = useState(false);
	// const show = useMemo(() => first, [second])
	const [upload, setUpload] = useState("");
	const service = new Contributor();

	const makeUpload = (e) => {
		const image = URL.createObjectURL(e.target.files[0]);
		setUpload(image);
		// setUpload(true);
	};

	const FormComp = ({ label, comp }) => (
		<>
			<div className="flex w-full items-center justify-center">
				<label className="mx-4">{label}</label>
				<div>{comp}</div>
			</div>
		</>
	);

	const uploadImage = async (data) => {
		const res = await service.upload(data);
		console.log(res);
	};
	return (
		<>
			<Sidebar
				title="Create"
				component={
					<>
						<div className=" w-2/4 ">
							{!upload ? (
								<div className=" shadow-xl p-16">
									{/* choose image */}

									<img src={uploadIcon} alt="upload icon" className="mx-auto my-11 border" />
									<p>
										Drag and drop files to upload <span className="block"></span>
										Your Photo will be private until you publish them
									</p>
									<div className="mt-5">
										<label
											for="upload"
											className="p-5 text-center bg-blue-500 text-white cursor-pointer border-none rounded-lg"
										>
											Select Photo
										</label>
										<input
											id="upload"
											type="file"
											className="hidden"
											accept="image/*"
											onChange={makeUpload}
										/>
									</div>
								</div>
							) : (
								<>
									{/* preview and edit image */}
									<div className="p-16">
										<label for="upload">
											<img
												src={
													upload ||
													"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd16kd6gzalkogb.cloudfront.net%2Fmagazine_images%2FVancouver-Art-Gallery-via-Tourism-Vancouver.jpg&f=1&nofb=1"
												}
												alt="upload icon"
												for="upload"
												className="mx-auto mb-11 rounded-lg w-full cursor-pointer"
											/>
										</label>
										<form>
											<div className="flex justify-between  items-center">
												<div>
													<FormComp
														label="Photo Title"
														comp={<input type="text" className="w-60" />}
													/>
												</div>
												<div>
													<FormComp
														label="Select Category"
														comp={
															<select className="w-60">
																<option></option>
																<option>Women</option>
															</select>
														}
													/>
												</div>
											</div>
											<div className="py-5">
												<FormComp
													label="Tags: "
													comp={
														<div className="flex">
															<span className="block p-4 m-3 border shadow rounded-md">
																Chilren
															</span>
															<span className="block p-4 m-3 border shadow rounded-md">
																Chilren
															</span>
															<span className="block p-4 m-3 border shadow rounded-md">
																Chilren
															</span>
														</div>
													}
												/>
											</div>
										</form>
									</div>
								</>
							)}
						</div>
						<div className="py-16  mt-16 text-right w-full">
							<button className="p-5 border shadow mr-5 rounded w-28 text-gray-500">Back</button>
							<button
								className="p-5 bg-blue-500 shadow-md rounded w-28 text-white"
								onClick={uploadImage}
							>
								Proceed
							</button>
						</div>
					</>
				}
			/>
		</>
	);
}
