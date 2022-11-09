import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import assets from "../js/assets";
const Create = () => {
	const [currentState, setCurrentState] = useState("success");
	const fileTypes = ["JPEG", "PNG", "GIF"];
	const handleChange = (file) => {
		if (file) console.log(file);
	};

	// const changeState = (v) => setCurrentState(v);

	return (
		<div className="create">
			<p className="apt-4 mb-0 apb-4 font-700 font-22">Create</p>
			<div>
				<div className="upload position-relative">
					{currentState === "upload" ? (
						<>
							<FileUploader
								handleChange={handleChange}
								name="file"
								types={fileTypes}
								classes="file "
								multiple={false}
								children={
									<>
										<span>
											<i class="fa-solid fa-upload fs-1 mb-5"></i> <br />
											Drag and drop photos files to upload <br />
											Your photo will be private until you upload them
										</span>
										<button className="d-bg-blue text-white round-ter border-0 p-3 mt-5">Select Photo</button>
									</>
								}
							/>
							<div>
								<p className="text-center">
									By submitting your photos to aworan you acknowledge that you agree to (insert name )Terms of Service and Community Guidelines. <br /> Please be sure not to violate others' copyright
									or privacy rights. Learn more
								</p>
							</div>
						</>
					) : (
						""
					)}

					{currentState === "preview" ? (
						<>
							<div className="preview  w-50">
								<div className="img-preview apb-6 text-center">
									<img src={assets.preview} alt="" />
								</div>
								<div className="d-flex justify-content-between">
									<div>
										<label className="me-5">Photo title</label>
										<input className="p-3 round-ter " />
									</div>
									<div>
										<label className="me-5">Select category</label>
										<input className="p-3 round-ter " />
									</div>
								</div>

								<div className="d-flex align-items-center amt-4 amb-4 ">
									<label className="d-block me-5">Tag</label>
									<div className="tags d-flex align-items-center">
										{["children", "woman", "Animal", "Flowers"].map((e) => (
											<span className="p-3  round-ter d-block" role="button">
												{e}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="position-absolute text-end w-100 bottom-0 px-5">
								<button className="bg-white border-0 round-ter p-3 px-5 me-md-5 mb-4 mb-md-0 d-blue-sec">Back</button>
								<button className="d-bg-blue border-0 px-5 text-wite round-ter p-3 text-white">Proceed</button>
							</div>
						</>
					) : (
						""
					)}

					{currentState === "success" ? (
						<div className="success">
							<div className="img-preview apb-6 text-center">
								<img src={assets.success} alt="" />
							</div>
							<p>Your photo is under review,once approved you’d be notified</p>
							<div className="text-center amt-6">
								<button className="d-bg-blue border-0 px-5 text-wite round-ter p-3 text-white me-md-5 mb-4 mb-md-0">Create another</button>
								<button className="bg-white border-0 round-ter p-3 px-5  d-blue-sec">Back</button>
							</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Create;
