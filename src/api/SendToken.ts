import axios from "axios";
import { API_BASE_URL } from "./http-transport/axios";

export interface LoginRequest {
	username: string;
	password: string;
}

export async function sendToken(email: string, token: string | null) {
	try {
		const response = await axios.get(
			`${API_BASE_URL}/api/v1/auth/token/send/${email}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch");
	}
}
