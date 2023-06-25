import axios from "axios";
import { API_BASE_URL } from "./http-transport/axios";

interface User {
	id: number;
	name: string;
	email: string;
}

interface ApiResponse<T> {
	data: T;
}

interface ApiError {
	message: string;
	code: number;
}

export interface LoginRequest {
	username: string;
	password: string;
}

interface LoginResponse {
	userId: string;
	token: string;
	status: string;
	countryCode: string;
	mobileNumber: string;
	isSuccessful: boolean;
}

export async function login(
	request: LoginRequest
): Promise<ApiResponse<LoginResponse>> {
	try {
		const response: ApiResponse<ApiResponse<LoginResponse>> = await axios.post(
			`${API_BASE_URL}/api/v1/auth/authenticate`,
			request
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to login");
	}
}
