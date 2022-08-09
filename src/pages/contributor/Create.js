import Sidebar from "../../components/Sidebar";
import uploadIcon from "../../assets/upload.svg";
import { useState } from "react";
import Contributor from "../../services/contributor.service";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Http from "../../http";
import AuthService from "../../services";
import { useNavigate } from "react-router";
export default function Create() {
	// const [preview, setPreview] = useState(false);
	// const show = useMemo(() => first, [second])
	const [upload, setUpload] = useState("");
	const [formImage, setFormImage] = useState("");
	const [success, setSuccess] = useState(false);
	const history = useNavigate();
	const service = new AuthService();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const makeUpload = (e) => {
		const image = URL.createObjectURL(e.target.files[0]);
		setFormImage(e.target.files[0]);
		setUpload(image);
		// setUpload(true);
	};

	const backButton = () => setUpload("");

	const FormComp = ({ label, comp }) => (
		<>
			<div className="flex w-full items-center justify-center">
				<label className="mx-4">{label}</label>
				<div>{comp}</div>
			</div>
		</>
	);

	const uploadImage = async (data) => {
		const fromToAdd = Object.keys(data);
		const form = new FormData();
		form.append("img", formImage);
		for (let key of fromToAdd) {
			form.append(key, data[key]);
		}
		const res = await new Http(service.baseUrl + "upload").post(form, service.header);

		if (res.message === "Upload successful") setSuccess(true);
		toast.info(res.message);

		setTimeout(() => {
			setUpload("");
			setSuccess(false);
		}, 5000);
		// const res = await service.upload(FormData);
		// toast.info(res.message);
	};
	return (
		<>
			<Sidebar
				title="Create"
				component={
					<>
						<div className=" w-full">
							{success ? (
								<p>Upload successful</p>
							) : (
								<>
									{!upload ? (
										<div className=" shadow-xl p-16">
											{/* choose image */}

											<img src={uploadIcon} alt="upload icon" className="mx-auto my-11" />
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
												<form onSubmit={handleSubmit(uploadImage)}>
													<label for="upload">
														<img
															src={
																upload ||
																"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd16kd6gzalkogb.cloudfront.net%2Fmagazine_images%2FVancouver-Art-Gallery-via-Tourism-Vancouver.jpg&f=1&nofb=1"
															}
															alt="upload icon"
															className="mx-auto mb-11 rounded-lg w-full cursor-pointer"
														/>
													</label>
													<div className="flex justify-between  items-center">
														<div>
															<FormComp
																label="Photo Title"
																comp={<input type="text" className="w-60" {...register("title")} />}
															/>
														</div>
														<div>
															<FormComp
																label="Select Category"
																comp={
																	<select className="w-60" {...register("category")}>
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
													<div className="py-16  mt-16 text-right w-full">
														<button
															type="button"
															className="p-5 border shadow mr-5 rounded w-28 text-gray-500"
															onClick={backButton}
															hidden={!upload}
														>
															Back
														</button>
														<button
															type="submit"
															className="p-5 bg-blue-500 shadow-md rounded w-28 text-white"
															hidden={!upload}
															// onClick={uploadImage}
														>
															Proceed
														</button>
													</div>
												</form>
											</div>
										</>
									)}
								</>
							)}
						</div>
					</>
				}
			/>
		</>
	);
}
