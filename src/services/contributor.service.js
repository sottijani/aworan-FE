import AuthService from ".";

class Contributor extends AuthService {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
	}

	async upload(data = {}) {
		const response = await this.http("upload").post(data, this.header);
		return response;
	}
	async uploads() {
		const response = await this.http("uploads/").get(this.header);
		return response;
	}

	async getUpload(id) {
		const response = await this.http(`upload/${id}`).get(this.header);
		return response;
	}

	async download() {
		const response = await this.http(`download`).get(this.header);
		return response;
	}

	async getAnalytics() {
		const response = await this.http(`analytics`).get(this.header);
		return response;
	}

	async deleteUpload(id) {
		const response = await this.http(`delete/image/${id}`).delete(this.header);
		return response;
	}
}

export default Contributor;
