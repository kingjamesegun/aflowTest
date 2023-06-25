import axios from "axios";

export const API_BASE_URL = "https://uat-api.aserver.a-flow.io";

const axiosInstance = axios.create({
	baseURL: `${API_BASE_URL}/api/v1/`,

	headers: {
		"Content-Type": "application/json",
	},
});

// axiosInstance.interceptors.request.use(async (config) => {
// 	const token = localStorage.getItem("jwtToken");
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
// });

export default axiosInstance;
