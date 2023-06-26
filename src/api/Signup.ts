import axiosInstance, { API_BASE_URL } from "./http-transport/axios";

interface ApiResponse<T> {
	status: any;
	token: any;
	email: any;
	data: T;
}

export type SignUpRequest = {
	emailAddress: string;
	password: string;
	mobileNumber01: string;
	countryCode: string;
};

interface signResponse {
	userId: string;
	token: string;
	status: string;
	countryCode: string;
	mobileNumber: string;
	isSuccessful: boolean;
}

export async function signup(
	request: SignUpRequest
): Promise<ApiResponse<signResponse>> {
	try {
		const response: ApiResponse<ApiResponse<signResponse>> =
			await axiosInstance.post(`${API_BASE_URL}/api/v1/auth/register`, request);
		return response.data;
	} catch (error) {
		throw new Error("Failed to Signup");
	}
}
