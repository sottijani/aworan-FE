import Sidebar from "../../components/Sidebar";

export default function History() {
	const tableHeading = ["Photo", "Title", "Status", "Category", "Date", ""];
	return (
		<>
			<Sidebar
				title="History"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="py-10 shadow-sm flex justify-start items-center px-10">
							<input type="search" placeholder="search for photos" className="w-80 mr-11" />
							<select className="w-52">
								<option>month</option>
								<option>ello</option>
							</select>
						</div>
						<div className="py-10 px-10 text-left">
							<div className="flex flex-nowrap item-center p-2 text-left overflow-x-auto">
								{tableHeading.map((x) => (
									<p className="basis-1/4 uppercase text-gray-400">{x}</p>
								))}
							</div>
						</div>
					</div>
				}
			/>
		</>
	);
}
