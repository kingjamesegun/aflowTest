import axios from "axios";
import { API_BASE_URL } from "./http-transport/axios";

export async function loginAttempt(email: string) {
	try {
		const response = await axios.get(
			`${API_BASE_URL}/api/v1/auth/attempt/save/${email}`
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch");
	}
}
