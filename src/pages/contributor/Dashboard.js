import Sidebar from "../../components/Sidebar";

export const Analytics = ({ title, figure }) => {
	return (
		<>
			<div className="shrink-0 my-1 w-1/4 p-2  text-gray-400">
				<div className="rounded py-5 shadow">
					<span>{title}</span>
					<p className="text-2xl font-medium mt-5">{figure}</p>
				</div>
			</div>
		</>
	);
};
export default function Dasboard() {
	return (
		<>
			<Sidebar
				title="Dasboard"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="py-10 flex flex-wrap justify-center items-center px-10">
							<Analytics title="photo" figure="2000" />
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
