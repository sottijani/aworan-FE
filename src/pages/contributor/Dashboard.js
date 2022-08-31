import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Contributor from "../../services/contributor.service";

export const Analytics = ({ title, figure }) => (
	<>
		<div className="shrink-0 my-1 w-1/4 p-2  text-gray-400">
			<div className="rounded py-5 shadow">
				<span>{title}</span>
				<p className="text-2xl font-medium mt-5">{figure}</p>
			</div>
		</div>
	</>
);

export default function Dasboard() {
	const service = new Contributor();
	const [analytics, setAnalytics] = useState({});
	const getAnalytics = async () => {
		const { data, status } = await service.getAnalytics();
		if (status) setAnalytics({ ...analytics, ...data });
		console.log(data);
	};
	useEffect(() => {
		getAnalytics();
	}, []);

	return (
		<>
			<Sidebar
				title="Dasboard"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="py-10 flex flex-wrap justify-center items-center px-10">
							<Analytics title="photo" figure={analytics?.total_upload || 0} />
							<Analytics title="Downloads" figure="10" />
							<Analytics title="Total Earnings" figure="#50,000" />
							<Analytics title="Monthly Earnings" figure="#10,000" />
						</div>
					</div>
				}
			/>
		</>
	);
}
