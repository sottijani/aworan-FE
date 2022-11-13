import { Fragment } from "react";
import { LineChart, Line, XAxis, YAxis,  Legend, ResponsiveContainer } from "recharts";
import { data } from "../js/assets";
const Dashboard = () => {
	return (
		// <Fragment>
		<div className="settings dashboard">
			<p className="apt-4 mb-0 apb-4 font-700 font-22">Dashboard</p>
			<div className="bg-white round-ter " style={{ minHeight: "76.2rem" }}>
				<div className=" px-5border">
					<div className="row ">
						<div className="col-md-3 p-5 text-center">
							<span>Photo</span>
							<p>12</p>
						</div>
						<div className="col-md-3 p-5 text-center">
							<span>Downloads</span>
							<p>12</p>
						</div>
						<div className="col-md-3 p-5 text-center">
							<span>Total Earnings</span>
							<p>12</p>
						</div>
						<div className="col-md-3 p-5 text-center">
							<span>Montly Earnings</span>
							<p>12</p>
						</div>
						<Fragment>
							<div className="col-md-4  text-center">
								<p className="font-18 font-700">Overview</p>
							</div>
							<div className="col-md-7  text-end pe-5">
								<select className="p-2">
									<option>Select</option>
								</select>
							</div>
						</Fragment>
						<ResponsiveContainer width="100%" height="550" className="py-5">
							<div>
								<LineChart
									width={800}
									height={400}
									className="d-block mx-auto"
									data={data}
									margin={{
										top: 5,
										right: 30,
										left: 20,
										bottom: 5,
									}}
								>
									<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 20 }} />
									<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
									{/* <CartesianGrid strokeDasharray="3 3" /> */}
									<XAxis dataKey="name" />
									<YAxis />
									{/* <Tooltip /> */}
									<Legend />
								</LineChart>
							</div>
						</ResponsiveContainer>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
		// </Fragment>
	);
};

export default Dashboard;