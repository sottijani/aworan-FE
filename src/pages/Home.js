import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import Modal from "../components/Modal";
import Navbar from "../components/navbar";
import UserContext from "../context/UserContext";
import HTTP from "../http/consume";

const Home = () => {
	const cloudinaryUrl = process.env.REACT_APP_CLOUD_URL;
	const { user } = useContext(UserContext);
	const bgRef = useRef();

	const [currentImg, setCurrentImg] = useState("");
	const [modal, setModal] = useState(false);
	const [images, setImages] = useState([]);

	const getAllImages = async () => {
		const savedData = sessionStorage.getItem("results");
		if (savedData) setImages(JSON.parse(savedData));
		if (!savedData) {
			const {
				data: { data: response, message },
				status,
			} = await HTTP.get("uploads/");
			console.log(message);
			if (status < 400) {
				sessionStorage.setItem("results", JSON.stringify(response));
				setImages(response);
			} else toast.warn(message);
		}
	};

	const showModal = (img) => () => {
		setCurrentImg(`${cloudinaryUrl}${img}`);
		setModal(true);
	};

	const updateDownload = async (id) => {
		const data = {
			user_id: user.id,
			img_id: id,
		};
		await HTTP.put("update/download", data);
	};

	const download = async (fileSource, id) => {
		await HTTP.downloadFile(`${cloudinaryUrl}${fileSource}`, id, updateDownload(id));
	};

	const closeModal = () => {
		if (modal) {
			setCurrentImg("");
			setModal(false);
		}
	};

	useEffect(() => {
		getAllImages();
	}, []);

	return (
		<>
			<div className="corousel mb-5 relative" ref={bgRef}>
				<div className="container px-28 flex items-center flex-col">
					<p className="text-white text-3xl">One Platform, a thousand way to be seen!</p>
					<form className="flex items-center w-full my-10">
						<input type="text" className="p-5 w-full rounded-l-3xl rounded-r-none" />
						<button className="px-12 py-6 text-white h-full rounded-l-none rounded-r-3xl bg-blue-500">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</div>
			</div>
			<div className="container mx-auto gap-5 sm:columns-1  md:columns-3 pb-24 px-5 md:px-0">
				{images.length
					? images.map((img) => (
							<>
								<div className="shadow-lg  overflow-hidden mb-5 relative show-prop-con ">
									<img src={`${cloudinaryUrl}${img.img_url}`} alt={img.title} className="w-full h-full object-cover" onClick={showModal(img.img_url)} />
									<div className="button-container justify-end top-0">
										<Button
											// clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
											cl="mr-5"
											icon={<i className="fa-regular fa-heart"></i>}
										/>
										<Button
											// clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
											icon={<i className="fa-regular fa-plus"></i>}
										/>
									</div>
									<div className="button-container justify-between bottom-0  ">
										<button className="rounded-full overflow-hidden w-12 h-12">
											<img src={`${cloudinaryUrl}${img.img_url}`} alt={img.title} className="w-full h-full object-cover" />
										</button>
										<Button clickEvent={() => download(img.img_url, img.id)} icon={<i className="fa-solid fa-arrow-down"></i>} />
									</div>
								</div>
							</>
					  ))
					: ""}
				{modal && <Modal img={currentImg} onclose={closeModal} />}
			</div>

			<Footer />
		</>
	);
};

export default Home;

const Button = ({ clickEvent, icon, cl }) => (
	<>
		<button onClick={clickEvent} className={`text-right  px-2 py-1 rounded-md text-black bg-white ${cl}`}>
			{icon}
		</button>
	</>
);
