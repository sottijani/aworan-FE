import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Contributor from "../services/contributor.service";

const Home = () => {
	const http = new Contributor();
	const [images, setImages] = useState([]);
	const [currentImg, setCurrentImg] = useState("");
	const [modal, setModal] = useState(false);
	const cloudinaryUrl = "https://res.cloudinary.com/dd1zbrj8l/image/upload/v1660036816/";

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

	const closeModal = () => {
		if (modal) setModal(false);
	};

	useEffect(() => {
		getAllImages();
	}, []);

	return (
		<div
			onClick={closeModal}
			className="container mx-auto gap-10 sm:columns-1  md:columns-3 lg:columns-4 py-24 px-5 md:px-0"
		>
			{modal && <Modal img={currentImg} />}

			{images.length
				? images.map((img) => (
						<>
							<div className="shadow-lg  rounded-lg overflow-hidden mb-10">
								<img
									src={`${cloudinaryUrl}${img.img_url}`}
									alt={img.title}
									className="w-full h-full object-cover hover:scale-x-105 duration-105 cursor-pointer transition-transform"
								/>
								<button
									onClick={showModal(`${cloudinaryUrl}${img.img_url}`)}
									className="p-4 bg-blue-500 text-white"
								>
									View
								</button>
							</div>
						</>
				  ))
				: ""}
		</div>
	);
};

export default Home;