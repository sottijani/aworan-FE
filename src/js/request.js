/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = " http://localhost:5000/";

export const useCustomeNavigate = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");

	const post = async (path, data, auth = "") => {
		const res = await fetch(baseUrl + path, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "content-type": "application/json", "authorization": `Bearer ${auth}` },
		});
		const status = res.status;
		const response = await res.json();
		setMessage(`send ${response.message}`);
		if (response.message === "unauthorized") navigate("/signin");
		return { status, response };
	};

	const get = async (path, auth) => {
		const res = await fetch(baseUrl + path, {
			method: "GET",
			headers: { "content-type": "application/json", "authorization": `Bearer ${auth}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`get ${response.message}`);
		return { status, response };
	};

	const put = async (path, data, auth) => {
		const res = await fetch(baseUrl + path, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: { "content-type": "application/json", "authorization": `Bearer ${auth}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`update ${response.message}`);
		return { status, response };
	};

	const remove = async (path, auth) => {
		const res = await fetch(baseUrl + path, {
			method: "DELETE",
			headers: { "content-type": "application/json", "authorization": `Bearer ${auth}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`delete ${response.message}`);
		return { status, response };
	};

	useEffect(() => {
		if (message === "unauthorized") navigate("/signin");
	}, [message]);
	return { post, get, put, remove };
};
