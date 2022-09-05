import Vector from "../assets/Vector.svg";
import transaction from "../assets/transaction.svg";
import card from "../assets/card.svg";
import logout from "../assets/logout.svg";
import settings from "../assets/settings.svg";
import analytics from "../assets/analytics.svg";
import create from "../assets/create.svg";
import { Link } from "react-router-dom";
export default function Sidebar({ title, component, key }) {
	const LinkWIthIcon = ({ icon, title, link, func }) => (
		<Link to={link} key={key}>
			<div className="mb-8 p-5 text-black shadow rounded-xl hover:bg-blue-500 hover:text-gray-200 cursor-pointer">
				<div className="flex items-center w-full text-lg">
					<span className="mr-5">
						<img src={icon || Vector} alt="" width="15px" />
					</span>
					<p>{title}</p>
				</div>
			</div>
		</Link>
	);

	return (
		<div className="bg-gray-100 flex overflow-auto ">
			<div className="py-11 h-screen bg-white  w-1/5 flex flex-col  items-center sticky top-0 ">
				<div className="profile text-gray-700 text-center mb-16">
					<div className="h-40 w-40 overflow-hidden bg-white rounded-full mb-5 mx-auto">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1"
							alt="profile pic"
							className="w-full h-full object-cover"
						/>
					</div>
					<p className="text-2xl font-bold">Jonathan Smith</p>
					<p className="text-lg">Jonathansmith@gmail.com</p>
				</div>
				<div className="w-4/6">
					<LinkWIthIcon icon={analytics} title="Dashboard" link="/dashboard" />
					<LinkWIthIcon icon={create} title="Create" link="/upload" />
					<LinkWIthIcon icon={transaction} title="History" link="/history" />
					<LinkWIthIcon icon={card} title="Earnings" link="/payment" />
					<LinkWIthIcon icon={settings} title="Settings" link="/profile" />
					<LinkWIthIcon icon={logout} title="Logout" link="/signin" />
					<LinkWIthIcon icon={logout} title="Home" link="/" />
				</div>
			</div>
			<div className="w-4/5 p-10">
				<div className="">
					<p className="text-5xl">{title}</p>
				</div>
				<div className="h-full flex items-center flex-col text-center mx-auto py-10">
					{component}
				</div>
			</div>
		</div>
	);
}
