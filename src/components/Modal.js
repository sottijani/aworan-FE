const Modal = ({ img, onclose }) => {
	const style = { background: "rgba(0,0,0,.8" };
	const MiscButton = ({ mainTex, caption }) => (
		<>
			<p className="text-center mr-10">
				<small>{mainTex}</small> <br /> <span>{caption}</span>
			</p>
		</>
	);
	const IconButton = ({ icon, text }) => (
		<>
			<button className="text-right  border-gray-500 px-5 py-2 rounded-md  bg-white border-2 ml-6">
				{icon} {text}
			</button>
		</>
	);
	return (
		<div
			className={`w-screen z-auto  h-screen fixed left-0 top-0 flex justify-center items-center`}
			style={style}
			onClick={onclose}
		>
			{/* Modal */}
			<div
				className="modal-body border bg-white w-2/5 h-4/5 mx-auto shadow-lg "
				// style={style}
			>
				<div className="modal-cap">
					<div className=" flex items-center">
						<div className="rounded-full overflow-hidden w-12 h-12">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.stocksy.com%2Fa%2F5GF000%2Fz9%2F58657.jpg%3F1571449602&f=1&nofb=1)"
								alt={img.title}
								className="w-full h-full object-cover"
							/>
						</div>
						<p className="ml-2">
							BAA Imegry <br />
							<small className="text-gray-400">@baaimegry</small>
						</p>
					</div>
					<div>
						<button className="p-3 rounded-lg bg-blue-500 text-white">Buy Photo</button>
						<button className="text-right  border-gray-500 px-3 py-2 rounded-md  bg-white border-2 mx-4">
							<i className="fa-regular fa-plus"></i>
						</button>
						<button className="text-right  border-gray-500 px-3 py-2 rounded-md  bg-white border-2 ">
							<i className="fa-regular fa-heart"></i>
						</button>
					</div>
				</div>
				<div className="overflow-hidden mx-auto  w-3/4 modal-image">
					<img src={img} className="w-full h-full object-contain" alt="" />
				</div>
				<div className="modal-cap">
					<div className="flex items-center">
						<MiscButton mainTex="View" caption="450" />
						<MiscButton mainTex="Download" caption="200" />
						<MiscButton mainTex="Category" caption="349" />
					</div>
					<div>
						<IconButton icon={<i className="fa-solid fa-share mr-2"></i>} text="Share" />
						<IconButton icon={<i class="fa-solid fa-info mr-2"></i>} text="Info" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
