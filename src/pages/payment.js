import { Fragment } from "react";

const Payment = () => {
	return (
		<Fragment>
			<div className="settings">
				<p className="apt-4 mb-0 apb-4 font-700 font-22">Payment</p>
				<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
					<div className="tabs d-flex">
						<span className="border-0">
							<input type="search" className=" round-ter p-3 " placeholder="Search for photo" />
						</span>
					</div>
					<div className="content container-fluid">
						<div className="row">
							<table style={{ width: "100%" }}>
								<thead>
									<tr className="text-uppercase">
										<th>Amount</th>
										<th>Status</th>
										<th>Date</th>
										<th>Reference Number</th>
									</tr>
								</thead>
								<tbody>
									{[1, 2, 3].map((e) => (
										<tr>
											<td>#2000</td>
											<td>Completed</td>
											<td>20-10-2022</td>
											<td>6IYIH3AU3J</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Payment;
