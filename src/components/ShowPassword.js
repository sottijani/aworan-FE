export default function ShowPassword({ image, showPassword, setShowPassword }) {
	return (
		<>
			<img
				src={image}
				alt="show password"
				className="absolute top-12 right-4 cursor-pointer"
				onClick={() => setShowPassword(!showPassword)}
			/>
		</>
	);
}
