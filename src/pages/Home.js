import axios from "axios";
import fileDownload from "js-file-download";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import UserContext from "../context/UserContext";
import Contributor from "../services/contributor.service";

const Button = ({ clickEvent, icon, cl }) => (
	<>
		<button
			onClick={clickEvent}
			className={`text-right  px-2 py-1 rounded-md text-black bg-white ${cl}`}
		>
			{icon}
		</button>
	</>
);

const Home = () => {
	const http = new Contributor();
	const [images, setImages] = useState([]);
	const [currentImg, setCurrentImg] = useState("");
	const [modal, setModal] = useState(false);
	const cloudinaryUrl = "https://res.cloudinary.com/dd1zbrj8l/image/upload/v1660036816/";
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	const getAllImages = async () => {
		const savedData = sessionStorage.getItem("results");
		if (savedData) setImages(JSON.parse(savedData));
		else {
			const res = await http.uploads();
			const {
				data: { data: response },
			} = res;
			sessionStorage.setItem("results", JSON.stringify(response));
			setImages(response);
			console.log(response);
		}
	};

	const showModal = (img) => () => {
		console.log(img);
		setCurrentImg(img);
		setModal(true);
	};

	const download = (img, fileName) => async () => {
		// let headerAut = http.header;
		if (!user.id) navigate("/signup", { replace: true });
		else
			axios
				.get(img, {
					responseType: "blob",
					headers: {
						"Authorization": `Bearer ${localStorage.getItem("token")}`,
					},
				})
				.then((res) => fileDownload(res.data, fileName + ".jpg"));
	};

	const closeModal = () => {
		if (modal) setModal(false);
	};

	useEffect(() => {
		getAllImages();
	}, []);

	return (
		<div
			onClick={closeModal}
			className="container mx-auto gap-5 sm:columns-1  md:columns-3 py-24 px-5 md:px-0"
		>
			{modal && <Modal img={currentImg} />}

			{images.length
				? images.map((img) => (
						<>
							<div className="shadow-lg  overflow-hidden mb-5 relative show-prop-con ">
								<img
									src={`${cloudinaryUrl}${img.img_url}`}
									alt={img.title}
									className="w-full h-full object-cover"
								/>
								<div className="button-container justify-end top-0">
									<Button
										// clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
										cl="mr-5"
										icon={<i class="fa-regular fa-heart"></i>}
									/>
									<Button
										// clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
										icon={<i class="fa-regular fa-plus"></i>}
									/>
								</div>
								<div className="button-container justify-between bottom-0  ">
									<button className="rounded-full overflow-hidden w-12 h-12">
										<img
											src={`${cloudinaryUrl}${img.img_url}`}
											alt={img.title}
											className="w-full h-full object-cover"
										/>
									</button>
									<Button
										clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
										icon={<i class="fa-solid fa-arrow-down"></i>}
									/>
								</div>
							</div>
						</>
				  ))
				: ""}
		</div>
	);
};

export default Home;
// showModal(`${cloudinaryUrl}${img.img_url}`)
