const baseUrl = " http://localhost:5000/";

const post = async (path, data, auth = "") => {
	const res = await fetch(baseUrl + path, {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "content-type": "application/json", "autorization": `Bearer ${auth}` },
	});

	return await res.json();
};

const get = async (path, auth) => {
	const res = await fetch(baseUrl + path, {
		method: "GET",
		headers: { "content-type": "application/json", "autorization": `Bearer ${auth}` },
	});

	return await res.json();
};

const put = async (path, data, auth) => {
	const res = await fetch(baseUrl + path, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: { "content-type": "application/json", "autorization": `Bearer ${auth}` },
	});

	return await res.json();
};

const remove = async (path, auth) => {
	const res = await fetch(baseUrl + path, {
		method: "DELETE",
		headers: { "content-type": "application/json", "autorization": `Bearer ${auth}` },
	});

	return await res.json();
};

const httpClient = { post, get, put, remove };

export default httpClient;
