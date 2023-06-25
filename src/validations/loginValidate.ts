import * as Yup from "yup";

export type LoginProps = {
	username: string;
	password: string;
};

export const initialValues: LoginProps = {
	username: "",
	password: "",
};

export const validationSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});
