import { Api } from "../api";

export class Auth {
	static signup(user: any) {
		return Api.post("/auth/registration", { data: user });
	}
	static login(user: any) {
		return Api.post("/auth/login", { data: user });
	}
	static fetchCurrentUser() {
		return Api.get("/user/me");
	}
}
