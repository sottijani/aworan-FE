import axios from "axios";

let option = {};
const header = { "Authorization": `Bearer ${localStorage.getItem("token")}` };
const baseUrl = process.env.REACT_APP_BASE_URL;
const post = async (route, data, auth = true) => {
	try {
		if (auth) option["headers"] = header;
		const result = await axios.post(`${baseUrl}${route}`, data, option);
		return result;
	} catch (error) {
		return error.response;
	}
};

const put = async (route, data, auth = true) => {
	try {
		if (auth) option["headers"] = header;
		const result = await axios.put(`${baseUrl}${route}`, data, option);
		return result;
	} catch (error) {
		return error.response;
	}
};

const get = async (route, auth = true) => {
	try {
		if (auth) option["headers"] = header;
		const result = await axios.get(`${baseUrl}${route}`, option);
		return result;
	} catch (error) {
		return error.response;
	}
};

const remove = async (route, auth = true) => {
	try {
		if (auth) option["headers"] = header;
		const result = await axios.delete(`${baseUrl}${route}`, option);
		return result;
	} catch (error) {
		return error.response;
	}
};

const downloadFile = async (filename, cb) => {
	try {
		option["responseType"] = "blob";
		option["headers"] = header;
		option["onDownloadProgress"] = (progressEv) => {
			const { loaded, total } = progressEv;
			console.log(loaded, total);
			if (loaded === total) cb();
		};
		const v = await axios.get(filename, option);
		console.log(v);
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

const HTTP = { post, put, get, remove, downloadFile };

export default HTTP;
