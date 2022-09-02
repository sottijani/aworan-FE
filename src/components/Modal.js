const Modal = ({ img }) => {
	const style = { background: "rgba(0,0,0,.8" };
	return (
		<div
			className={`w-screen z-auto  h-screen absolute left-0 top-0 flex justify-center items-center`}
			style={style}
		>
			{/* Modal */}
			<div className="w-3/6 h-4/5 mx-auto shadow-lg rounded-lg overflow-hidden  " style={style}>
				<img src={img} className="w-full h-full object-contain" alt="" />
			</div>
		</div>
	);
};

export default Modal;
