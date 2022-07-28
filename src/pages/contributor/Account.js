import Sidebar from "../../components/Sidebar";
export default function BankAccount() {
	return (
		<>
			<Sidebar
				title="Settings"
				component={<div className="w-full h-full bg-white rounded-lg"></div>}
			/>
		</>
	);
}
