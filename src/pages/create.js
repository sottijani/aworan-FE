import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const Create = () => {
	const [file, setFile] = useState(null);
	const fileTypes = ["JPEG", "PNG", "GIF"];
	const handleChange = (file) => {
		if (file) setFile(file);
	};
	return (
		<div className="create">
			<p className="apt-4 mb-0 apb-4 font-700 font-22">Create</p>
			<div>
				<div className="upload">
					<FileUploader
						handleChange={handleChange}
						name="file"
						types={fileTypes}
						classes="file"
						multiple={false}
						children={
							<>
								<span>
									<i class="fa-solid fa-upload fs-1"></i> <br />
									Drag and drop photos files to upload <br />
									Your photo will be private until you upload them
								</span>
								<button className="d-bg-blue text-white round-ter border-0 p-3 mt-5">Select Photo</button>
							</>
						}
						// label={`Drag and drop photos files to upload. Your photo will be private until you upload them `}
					/>
					{/* <p>{file ? `File name: ${file ? file[0].name : ""}` : "no files uploaded yet"}</p> */}
					<div>
						<p className="text-center">
							By submittingyour photos to (insert name ) you acknowledge that you agree to (insert name )Terms of Service and Community Guidelines. <br /> Please be sure not to violate others'
							copyright or privacy rights. Learn more
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;
