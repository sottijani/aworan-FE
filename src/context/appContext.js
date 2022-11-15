import { createContext, useEffect, useState } from "react";

const AppContext = createContext(null);
export const AppProvider = ({ component }) => {
	const [token, setToken] = useState();
	const [role, setRole] = useState();
	const get = (item) => localStorage.getItem(item);
	const set = (title, item) => localStorage.setItem(title, item);

	const login = (value, role) => {
		set("awr_tk", value);
		set("user_role", role);
		setToken(value);
	};

	useEffect(() => {
		setToken(get("awr_tk"));
		console.log(get("user_role"));
		setRole(get("user_role"));
	}, []);
	return <AppContext.Provider value={{ token, login, role }}>{component}</AppContext.Provider>;
};

export default AppContext;
