import * as Yup from "yup";

export type SignUpProps = {
	emailAddress: string;
	password: string;
	mobileNumber01: string;
	countryCode: string;
	confirmPassword: string;
};

export const initialValues: SignUpProps = {
	emailAddress: "",
	password: "",
	mobileNumber01: "",
	countryCode: "+234",
	confirmPassword: "",
};

export const validationSchema = Yup.object().shape({
	mobileNumber01: Yup.string().required("Phone is required"),
	emailAddress: Yup.string()
		.email("Invalid email")
		.required("Email is required"),
	countryCode: Yup.string().required("Country code required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm password is required"),
});
