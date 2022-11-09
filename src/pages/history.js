import { Fragment } from "react";
import assets from "../js/assets";

const History = () => {
	return (
		<Fragment>
			<div className="settings">
				<p className="apt-4 mb-0 apb-4 font-700 font-22">History</p>
				<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
					<div className="tabs d-flex">
						<span className="border-0">
							<input type="search" className=" round-ter p-3 " placeholder="Search for photo" />
						</span>
						<span className="border-0">
							<select className="round-ter p-3 ">
								<option>Select</option>
								<option>This month</option>
							</select>
						</span>
					</div>
					<div className="content container-fluid">
						<div className="row">
							<table style={{ width: "100%" }}>
								<tr className="text-uppercase">
									<th>Photo</th>
									<th>Title</th>
									<th>Status</th>
									<th>Category</th>
									<th>Date</th>
									<th></th>
								</tr>
								{[1, 2, 3].map((e) => (
									<tr>
										<td>
											<div className="img round-ter">
												<img src={assets.preview} alt="" />
											</div>
										</td>
										<td>A Happy man</td>
										<td>Acceted</td>
										<td>Expression</td>
										<td>Date</td>
										<td>
											<div class="dropdown">
												<button class=" p-2 px-3 bg-transparent round-ter dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
													<i class="fa-solid fa-ellipsis"></i>
												</button>
												<ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
													<span className="d-block font-14 dropdown-item " role="button">
														Edit Photo
													</span>
													<span className="d-block dropdown-item font-14" role="button">
														Delete Photo
													</span>
												</ul>
											</div>
										</td>
									</tr>
								))}
							</table>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default History;
