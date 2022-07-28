import Sidebar from "../../components/Sidebar";

export default function Payment() {
	const tableHeading = ["Amount", "Status", "Date", "Reference Number"];
	return (
		<>
			<Sidebar
				title="Payment"
				component={
					<div className="w-full h-full bg-white rounded-lg">
						<div className="py-10 shadow-sm flex justify-start items-center px-10">
							<input
								type="search"
								placeholder="search for Transaction Details"
								className="w-80 mr-11"
							/>
						</div>
						<div className="py-10 px-10 text-left">
							<div className="flex flex-nowrap item-center p-2 text-left overflow-x-auto">
								{tableHeading.map((x) => (
									<p className="uppercase text-gray-400 basis-1/4">{x}</p>
								))}
							</div>
						</div>
					</div>
				}
			/>
		</>
	);
}
