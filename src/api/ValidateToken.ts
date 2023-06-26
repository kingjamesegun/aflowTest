import axiosInstance, { API_BASE_URL } from "./http-transport/axios";

interface ApiResponse<T> {
	status: any;
	token: any;
	email: any;
	data: T;
}

export type validateTokenRequest = {
	email: string;
	token: string;
};

interface validateTokenResponse {
	email: string;
	message: string;
	isSuccessful: boolean;
}

export async function validateToken(
	request: validateTokenRequest,
	token: string | null
): Promise<ApiResponse<validateTokenResponse>> {
	try {
		const response: ApiResponse<ApiResponse<validateTokenResponse>> =
			await axiosInstance.post(
				`${API_BASE_URL}/api/v1/auth/token/validate`,
				request,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
		return response.data;
	} catch (error) {
		throw new Error("Failed to Signup");
	}
}
