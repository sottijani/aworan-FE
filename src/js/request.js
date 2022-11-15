/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";

export const baseUrl = "http://localhost:5000/";

export const useCustomeNavigate = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const { token } = useContext(AppContext);

	const post = async (path, data) => {
		const res = await fetch(baseUrl + path, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
		});
		const status = res.status;
		const response = await res.json();
		setMessage(`send ${response.message}`);
		if (response.message === "unauthorized") navigate("/signin");
		return { status, response };
	};

	const get = async (path) => {
		const res = await fetch(baseUrl + path, {
			method: "GET",
			headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`get ${response.message}`);
		return { status, response };
	};

	const put = async (path, data) => {
		const res = await fetch(baseUrl + path, {
			method: "PUT",
			body: JSON.stringify(data),
			headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`update ${response.message}`);
		return { status, response };
	};

	const remove = async (path) => {
		const res = await fetch(baseUrl + path, {
			method: "DELETE",
			headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
		});

		const status = res.status;
		const response = await res.json();
		setMessage(`delete ${response.message}`);
		return { status, response };
	};

	const downloadFile = async (filename, cb) => {
		try {
			const v = await axios.get(filename, {
				responseType: "blob",
				headers: { "authorization": `Bearer ${token}` },
				onDownloadProgress: (progressEv) => {
					const { loaded, total } = progressEv;
					console.log(loaded, total);
					if (loaded === total) cb();
				},
			});
			const response = await v.data;
			const blob = new Blob([response], { type: v.headers["content-type"] });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = url.replace(/^.*[\\/]/, "");
			link.click();

			setTimeout(() => {
				link.remove();
			}, 2000);
		} catch (error) {
			return error.response;
		}
	};

	useEffect(() => {
		if (message === "unauthorized") navigate("/signin");
	}, [message]);
	return { post, get, put, remove, downloadFile };
};
