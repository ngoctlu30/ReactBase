import axios, { AxiosRequestConfig } from "axios";
const API_ENDPOINT = "";

// const state = "";
const token = "";

const instance = axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		"Content-Type": "application/json",
		Authorization: token ? "Bearer " + token : null
	}
});

export class Api {
	static async post(
		url: string,
		data: any = {},
		config: AxiosRequestConfig = {}
	) {
		return await instance({
			url: url,
			method: "POST",
			data: JSON.stringify(data),
			...config
		});
	}

	static async put(
		url: string,
		data: any = {},
		config: AxiosRequestConfig = {}
	) {
		return await instance({
			url: url,
			method: "PUT",
			data: JSON.stringify(data),
			...config
		});
	}

	static async get(url: string, params: any = {}) {
		return await instance({
			url: url,
			method: "GET",
			params: { ...params },
			transformResponse: (data: any) => {
				// eslint-disable-next-line no-console
				console.log(data);
				return data;
			}
		});
	}

	static async delete(url: string, params: any = {}) {
		return await instance({
			url: url,
			method: "DELETE",
			params: { ...params }
		});
	}
}
