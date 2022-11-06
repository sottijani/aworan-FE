import assets from "../js/assets";

const Footer = () => {
	return (
		<>
			<article className="footer-1 d-flex align-items-center" key="ieo">
				<div className="aworan-container p-footer ">
					<div className="row">
						<div className="col-md-4 footer pe-md-0">
							<section>
								<p className="font-12">WHY CHOOSE MOOLAR</p>
								<p className="font-36 font-700">What makes US great!</p>
								<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								<button className="border-0 aworan-padding d-bg-blue text-white my-5 round-ter">Get Started</button>
							</section>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-6  ps-md-0">
							<div className="row">
								{[1, 2, 3, 4, 5, 6].map(() => (
									<div className="col-md-6 mb-5">
										<span className="d-inline-block d-bg-blue footer-icon round-ter d-flex justify-content-center align-items-center mb-3">
											<img src={assets["footer-hand"]} alt="" />
										</span>
										<p>Easy to use</p>
										<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</article>

			<article className="footer-2 d-flex flex-column p-footer" key="ika">
				<div className="aworan-container">
					<div className="inner">
						<span>
							<p className="text-white text-center font-48 font-700 d-none d-md-block">
								Create an account now. Start <br /> converting your funds.
							</p>
							<p className="text-white text-center font-48 font-700 d-md-none">Create an account now. Start converting your funds.</p>
						</span>
						<input placeholder="Enter your email address" className=" aworan-padding round-ter border-0 my-5" />
						<button className="border-0 aworan-padding d-bg-blue text-white round-ter ">Get Started</button>
					</div>
				</div>
				<div className="aworan-container inner-2">
					<div>
						<img src={assets.logo2} alt="" width="100px" />
					</div>
					<div className="links">
						<div className="row text-white">
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-3">
										<p>Company</p>
										<a href="/#">About us</a>
										<a href="/#">Press</a>
										<a href="/#">Career</a>
										<a href="/#">Policies</a>
										<a href="/#">Resources</a>
									</div>
									<div className="col-md-3">
										<p>Support</p>
										<a href="/#">FAQs</a>
										<a href="/#">Contact Us</a>
									</div>
									<div className="col-md-3">
										<p>Contact</p>
										<a href="/#">aworan@aworan.com</a>
										<a href="/#">(888) 560-1069</a>
									</div>
									<div className="col-md-3">
										<p>Address</p>
										<a href="#/">2715 Ash Dr. San Jose, South Dakota 83475</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 d-flex justify-content-around px-md-5">
								<div>
									<img alt="" src={assets.facebook} />
								</div>
								<div>
									<img alt="" src={assets.instagram} />
								</div>
								<div>
									<img alt="" src={assets.youtube} />
								</div>
								<div>
									<img alt="" src={assets.linkedin} />
								</div>
								<div>
									<img alt="" src={assets.twitter} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default Footer;
