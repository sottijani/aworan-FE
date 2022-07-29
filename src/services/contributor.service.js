import AuthService from ".";

class Contributor extends AuthService {
	constructor() {}

	async upload(data = {}) {
		const response = await this.http("upload").post(data);
		return response;
	}
	async uploads() {
		const response = await this.http("uploads").get();
		return response;
	}

	async getUpload(id) {
		const response = await this.http(`upload/${id}`).get();
		return response;
	}

	async download() {
		const response = await this.http(`download`).get();
		return response;
	}

	async deleteUpload(id) {
		const response = await this.http(`delete/image/${id}`).delete(this.header);
		return response;
	}
}

export default Contributor;
