import { createContext, useEffect, useState } from "react";

const AppContext = createContext(null);
export const AppProvider = ({ component }) => {
	const [token, setToken] = useState();
	const login = (value) => {
		localStorage.setItem("awr_tk", value);
		setToken(value);
	};

	useEffect(() => {
		const getToken = localStorage.getItem("awr_tk");
		if (getToken) setToken(getToken);
	}, []);
	return <AppContext.Provider value={{ token, login }}>{component}</AppContext.Provider>;
};

export default AppContext;
