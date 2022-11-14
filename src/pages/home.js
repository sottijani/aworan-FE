/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { homeImage } from "../js/assets";
import { useCustomeNavigate } from "../js/request";

const HomePage = () => {
	const [preview, setPreview] = useState("");
	const [images, setImages] = useState([]);
	const { post, get } = useCustomeNavigate();
	const getAllImages = async () => {
		const res = await get("uploads");
		console.log(res);
	};

	const download = async (data) => {
		const res = await post("download", data, {
			/** pending to add */
		});
		console.log(res);
	};

	const bookmark = async (data) => {
		const res = await post("bookmark", data, {
			/** pending to add */
		});
		console.log(res);
	};

	useEffect(() => {
		// getAllImages();
	}, []);
	return (
		<>
			<Navbar />
			<div className="carousel d-flex flex-column justify-content-center" key="corousel">
				<p className="text-white text-center font-48 font-700">One platform,a thousand ways to be seen!</p>
				<div className="d-flex justify-content-center my-5">
					<div className="rounded-20  overflow-hidden d-flex ">
						<input placeholder="Enter your email address" className=" aworan-padding rounded-0 border-0 h-100" style={{ width: "120rem" }} />
						<button className="border-0 aworan-padding h-100 rounded-0 d-bg-blue text-white ">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>
				</div>
				<div className="d-flex flex-wrap justify-content-center  align-items-center overflow-auto" key="links">
					{["All", "Abstract", "Architecture", "Experiment"].map((v) => (
						<a className="btn aworan-padding flex-shrink-0 mx-5 bg-white round-sec" href="/#">
							{v}
						</a>
					))}
				</div>
			</div>
			<div className="tag aworan-container d-flex flex-wrap justify-content-between gap-3 align-items-center overflow-auto" key="links">
				{["All", "Abstract", "Architecture", "Travel", "Experiment", "Animal", "Landscape", "Nature", "3d render"].map((v) => (
					<a className="btn aworan-padding flex-shrink-0" href="/#">
						{v}
					</a>
				))}
			</div>
			<div className="gallery aworan-container" key="gallery">
				{homeImage.map((pic, i) => (
					<div className="position-relative gallery-cont" onClick={() => setPreview(pic)}>
						<div className="text-end position-absolute top-0 left-0 w-100 p-3 pic-meta">
							<i className="fa-regular fa-heart p-3 bg-white border me-3 round-ter font-500 " role="button"></i>
							<i className="fa-solid fa-plus font-700 p-3 bg-white border round-ter" role="button"></i>
						</div>
						<img src={pic} alt={i} loading="lazy" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button" />
						<div className="d-flex justify-content-between align-items-center position-absolute bottom-0 left-0 w-100 p-3 pic-meta">
							<div className="overflow-hidden" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}>
								<img src={pic} width="100%" alt="" className="d-block me-4" />
							</div>
							<i class="fa-solid  fa-arrow-down font-700 p-3 bg-white border round-ter" role="button"></i>
						</div>
					</div>
				))}
			</div>

			{/* modal for image preview */}
			<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key="modal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content rounded-0">
						<div className="modal-header border-0">
							<div className="d-flex align-items-center">
								<div className="overflow-hidden" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}>
									<img src={preview} width="100%" alt="" className="d-block me-4" />
								</div>
								<p className="ps-3 pt-3">
									<span className="font-500">BBA Imagery</span> <br /> <small>@bbaImagery</small>
								</p>
							</div>

							<div>
								<button className="border-0 text-white p-3 round-ter d-bg-blue">Buy Photo</button>
								<i className="fa-regular fa-heart border p-3 mx-3 round-ter" role="button"></i>
								<i className="fa-solid fa-plus border p-3 round-ter" role="button"></i>
							</div>
						</div>
						<div className="modal-body px-4">
							<img src={preview} alt="" width="100%" />
						</div>
						<div className="modal-header border-0">
							<div className="d-flex align-items-center text-center">
								<p>
									View <br /> <span className="font-700">520</span>{" "}
								</p>
								<p className="mx-5">
									Download <br /> <span className="font-700">520</span>{" "}
								</p>
								<p>
									Category <br /> <span className="font-700">520</span>{" "}
								</p>
							</div>

							<div>
								<button className="btn border p-3 round-ter me-4">
									<i className="fa-solid fa-share me-3"></i> Share
								</button>
								<button className="btn border p-3 round-ter">
									<i class="fa-solid fa-circle-info me-3"></i>
									info
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
