import AuthService from ".";

class GlobalService extends AuthService {
	constructor() {
		super();
	}
	async getUploads() {
		const response = await this.http(`uploads`).get(this.header);
		return response;
	}
}

export default GlobalService;
