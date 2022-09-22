import axios from "axios";
import fileDownload from "js-file-download";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../components/footer";
import Modal from "../components/Modal";
import Navbar from "../components/navbar";
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
	const bgRef = useRef();
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
		bgRef.current.style.backgroundImage =
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.stocksy.com%2Fa%2F5GF000%2Fz9%2F58657.jpg%3F1571449602&f=1&nofb=1)";
	}, []);

	return (
		<>
			<Navbar />
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
			<div
				onClick={closeModal}
				className="container mx-auto gap-5 sm:columns-1  md:columns-3 pb-24 px-5 md:px-0"
			>
				{images.length
					? images.map((img) => (
							<>
								<div className="shadow-lg  overflow-hidden mb-5 relative show-prop-con ">
									<img
										src={`${cloudinaryUrl}${img.img_url}`}
										alt={img.title}
										className="w-full h-full object-cover"
										onClick={showModal(`${cloudinaryUrl}${img.img_url}`)}
									/>
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
											<img
												src={`${cloudinaryUrl}${img.img_url}`}
												alt={img.title}
												className="w-full h-full object-cover"
											/>
										</button>
										<Button
											clickEvent={download(`${cloudinaryUrl}${img.img_url}`, img.title)}
											icon={<i className="fa-solid fa-arrow-down"></i>}
										/>
									</div>
								</div>
							</>
					  ))
					: ""}
				{modal && <Modal img={currentImg} />}
			</div>

			<Footer />
		</>
	);
};

export default Home;
// showModal(`${cloudinaryUrl}${img.img_url}`)
