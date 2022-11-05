import { homeImage } from "../js/assets";

const HomePage = () => {
	return (
		<>
			<div className="carousel"></div>
			<div className="tag aworan-container d-flex justify-content-between align-items-center">
				{["All", "Abstract", "Architecture", "Travel", "Experiment", "Animal", "Landscape", "Nature", "3d render"].map((v) => (
					<a className="btn aworan-padding" href="/#">
						{v}
					</a>
				))}
			</div>
			<div className="gallery aworan-container">
				{homeImage.map((pic, i) => (
					<img src={pic} alt={i} loading="lazy" />
				))}
			</div>
		</>
	);
};

export default HomePage;
