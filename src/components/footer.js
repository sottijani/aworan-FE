import "../assets/css/footer.css";
export default function Footer() {
	const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
	ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum quisque. Sem
	viverra aliquet eget sit amet. Id venenatis a condimentum vitae sapien pellentesque
	`;
	return (
		<>
			<div className="bg-blue-200 py-28">
				<div className="container mx-auto md:flex gap-52">
					<div>
						<h1 className="text-2xl">Lorem ipsum dolor sit amet</h1>
						<p className="py-5"> {loremText}</p>

						<button className="p-2 px-5 bg-blue-500 text-white rounded border-none">
							Get Started
						</button>
					</div>
					<div className="flex flex-wrap gap-10">
						{[1, 2, 3, 4].map(() => (
							<>
								<div className="flex-intitial w-80">
									<i class="fa-solid fa-dove p-2 text-white bg-blue-500 rounded-full"></i>
									<h4 className="py-3">Lorem ipsum dolor sit amet</h4>
									<p>{loremText}</p>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
			<div className="bg-blue-700 text-white py-28">
				<div className="container mx-auto md:flex gap-52">
					<ul className="grid grid-cols-5 gap-10  w-full">
						<li>
							<p>Company</p>
							<a href="/#">About us</a>
							<a href="/#">Press</a>
							<a href="/#">Career</a>
							<a href="/#">Policies</a>
							<a href="/#">Resources</a>
						</li>
						<li>
							<p>Support</p>
							<a href="/#">FAQs</a>
							<a href="/#">ContactUs</a>
						</li>
						<li>
							<p>ContactUs</p>
							<a href="/#">hello@aworan.com</a>
							<a href="/#">(888)560-120</a>
						</li>
						<li>
							<p>Address</p>
							<span>Lorem ipsum dolor sit amet, consectetur</span>
						</li>
						<li className="social">
							<p>Social</p>
							{["square-facebook", "twitter", "instagram", "youtube", "linkedin"].map((e) => (
								<i class={`fa-brands fa-${e}`}></i>
							))}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
