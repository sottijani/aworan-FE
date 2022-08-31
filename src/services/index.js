import Http from "../http";

class AuthService {
	constructor() {
		this.header = {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
			},
		};
		this.baseUrl = "http://localhost:4000/";
	}

	http(params = "") {
		return new Http(`${this.baseUrl}${params}`);
	}

	async signUp(data = {}) {
		const response = await this.http("signup").post(data);
		return response;
	}

	async signIn(data = {}) {
		const response = await this.http("login").post(data);
		// cons
		return response;
	}

	async verifyEmail(data) {
		const response = await this("verify/email").http.post(data);
		return response;
	}

	async signOut() {
		const response = await this.http("signout").get(this.header);
		return response;
	}

	async forgotPassword() {
		const response = await this.http("forgot/password").get();
		return response;
	}

	async users() {
		const response = await this.http(`all/users`).get(this.header);
		return response;
	}

	async user(id = "") {
		const response = await this.http(`user/${id}`).get(this.header);
		return response;
	}

	async profile(id = "") {
		const response = await this.http(`profile`).get(this.header);
		return response;
	}

	async updateProfile(data = {}) {
		const response = await this.http("update/profile").put(data, this.header);
		return response;
	}

	async updatePassword(data = {}) {
		const response = await this.http("change/password").put(data, this.header);
		return response;
	}

	async resetPassword(data = {}) {
		const response = await this.http("reset/password").put(data);
		return response;
	}

	async changePassword(data = {}) {
		const response = this.http("password/change").post(data, this.header);
		return response;
	}
}

export default AuthService;
