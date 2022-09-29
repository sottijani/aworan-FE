const downloadProgress = async (img_url) => {
	const resp = await fetch(img_url);
	const reader = resp.body.getReader();
	const len = parseInt(resp.headers.get("Content-length"));
	console.log(len);
	let recived = 0;
	let chunks = [];
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		chunks.push(value);
		recived += value.length;

		console.log(`Recived ${recived} of ${len}`);
	}

	// Step 4: concatenate chunks into single Uint8Array
	let chunksAll = new Uint8Array(recived); // (4.1)
	let position = 0;
	for (let chunk of chunks) {
		chunksAll.set(chunk, position); // (4.2)
		position += chunk.length;
	}

	// Step 5: decode into a string
	let result = new TextDecoder("utf-8").decode(chunksAll);

	// We're done!
	let commits = JSON.parse(result);
	console.log(commits[0].author.login);
};

export default downloadProgress;

// const downloadProgress = async (img_url, fileName, cb) => {
// 	const request = new XMLHttpRequest();
// 	request.addEventListener("readystatechange", () => {
// 		if (request.readyState === 2 && request.status === 200) console.log("download started ");
// 		if (request.readyState === 3) console.log("download in progress ");
// 		if (request.readyState === 4) {
// 			console.log("download has finished ");
// 			const _OBJECT_URL = URL.createObjectURL(request.response)
// 		}
// 	});

// 	request.addEventListener("progress", (e) => {
// 		let percentComplete = (e.loaded / e.total) * 100;
// 		console.log(percentComplete);
// 	});

// 	request.responseType = 'blob'
// 	request.open("get", )
// };

// export default downloadProgress;
