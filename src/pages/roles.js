import { Fragment, useEffect, useState } from "react";
import { useCustomeNavigate } from "../js/request";

const Roles = () => {
	const [tab, setTab] = useState("profile");
	const [roles, setRoles] = useState([]);
	const { get } = useCustomeNavigate();
	const getRoles = async () => {
		const { response } = await get("roles");
		setRoles(response.data);
	};

	useEffect(() => {
		getRoles();
	}, []);
	return (
		<Fragment>
			<div className="settings">
				<p className="apt-4 mb-0 apb-4 font-700 font-22">Roles</p>
				<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
					<div className="content container-fluid">
						<div className="row">
							<table style={{ width: "100%" }}>
								<thead>
									<tr className="text-uppercase">
										<th>#</th>
										<th>Title</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{roles.map((role, i) => (
										<tr>
											{role.role_title !== "super_admin" ? (
												<>
													<td>{i + 1}</td>
													<td className="text-capitalize">{role.role_title}</td>
													<td>
														<div className="dropdown">
															<button className=" p-2 px-3 bg-transparent round-ter dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="fa-solid fa-ellipsis"></i>
															</button>
															<ul className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
																<span className="d-block font-14 dropdown-item " role="button">
																	Edit role
																</span>
																<span className="d-block dropdown-item font-14" role="button">
																	Delete role
																</span>
															</ul>
														</div>
													</td>
												</>
											) : (
												""
											)}
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

export default Roles;
