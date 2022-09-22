import React from "react";

export default function Footer() {
	const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
	ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Sem
	viverra aliquet eget sit amet. Id venenatis a condimentum vitae sapien pellentesque
	`;
	return (
		<div className="bg-blue-200 py-28">
			<div className="container mx-auto md:flex gap-52">
				<div>{loremText}</div>
				<div>{loremText}</div>
			</div>
		</div>
	);
}
