import { createContext, useEffect, useState } from "react";
const UserContext = createContext(null);

export const UserProvider = ({ container }) => {
	const [user, setUser] = useState({});
	const [updated, setUpdated] = useState(false);
	const userProfile = (userProfile) => {
		setUser(userProfile);
		localStorage.setItem("profile", JSON.stringify(userProfile));
		setUpdated(!updated);
	};

	const logout = () => {
		localStorage.removeItem("profile");
		localStorage.removeItem("token");
	};

	useEffect(() => {
		const userDetail = localStorage.getItem("profile");
		if (userDetail) setUser(JSON.parse(userDetail));
	}, [updated]);

	return (
		<UserContext.Provider value={{ user, userProfile, logout }}> {container} </UserContext.Provider>
	);
};

export default UserContext;
