import { useEffect, useState } from "react";
import Contributor from "../services/contributor.service";

const Home = () => {
	const http = new Contributor();
	const [images, setImages] = useState([]);
	const cloudinaryUrl = "https://res.cloudinary.com/dd1zbrj8l/image/upload/v1660036816/";

	const getAllImages = async () => {
		const res = await http.uploads();
		const {
			data: { data: response },
		} = res;
		setImages(response);
		console.log(response);
	};

	useEffect(() => {
		getAllImages();
	}, []);
	return (
		<div className="container mx-auto gap-10 sm:columns-1  md:columns-3 lg:columns-4 py-24 px-5 md:px-0">
			{images.length
				? images.map((img) => (
						<>
							<div className="shadow-lg  rounded-lg overflow-hidden mb-10">
								<img
									src={`${cloudinaryUrl}${img.img_url}`}
									alt={img.title}
									className="w-full h-full object-cover hover:scale-x-105 duration-105 cursor-pointer transition-transform"
								/>
								<button className="p-4 bg-blue-500 text-white">Download</button>
							</div>
						</>
				  ))
				: ""}
		</div>
	);
};

export default Home;
