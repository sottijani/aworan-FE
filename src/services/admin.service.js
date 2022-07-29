import AuthService from ".";

class Admin extends AuthService {
	constructor() {}

	async approveUpload(id, data = {}) {
		const response = await this.http(`approve/upload/${id}`).put(data);
		return response;
	}

	async createUserType(data) {
		const response = await this.http(`create/user-type`).post(data);
		return response;
	}
}
export default Admin;
