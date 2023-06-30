import logo from "../assets/icons/logo.svg";
import PageHeader from "../components/header/PageHeader";
import email from "../assets/icons/email.svg";
import paddlock from "../assets/icons/paddlock.svg";
import phone from "../assets/icons/phone.svg";
import MainInputs from "../components/inputs/MainInputs";
import { Formik, Form } from "formik";
import {
	SignUpProps,
	initialValues,
	validationSchema,
} from "../validations/signUpValidate";
import Button from "../components/button/Button";
import { signup, SignUpRequest, sendToken } from "../api";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/status/Error";
import { useState } from "react";

const SignUp = () => {
	const [errors, setErrors] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const navigate = useNavigate();
	const handleSubmit = async (values: SignUpProps) => {
		const { confirmPassword, ...signupData } = values;
		const request: SignUpRequest = signupData;
		try {
			const response = await signup(request);
			if (response) {
				const token = localStorage.getItem("token");
				const email = signupData.emailAddress;
				console.log({ token });

				sendToken(email, token);
				navigate("/verify");
			}
		} catch (error: any) {
			setErrors(error.message);
		}
	};
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 ">
			<div className="px-5 lg:px-20 py-10 lg:col-span-7 2xl:col-span-8">
				<div className="flex justify-between">
					<img src={logo} alt="logo" />
					{errors ? <Error errors={errors} /> : null}
				</div>
				<PageHeader
					title="Get Started"
					desc="Welcome, please enter your details to create your account."
				/>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, handleBlur }) => (
						<Form>
							<MainInputs
								icon={<img src={email} alt="email" />}
								placeholder="Enter your email"
								label="Email Address"
								errors={errors?.emailAddress}
								touched={touched.emailAddress}
								name="emailAddress"
							/>
							<MainInputs
								icon={<img src={phone} alt="phone" />}
								placeholder="813-3000-411"
								label="Phone No"
								errors={errors.mobileNumber01}
								touched={touched.mobileNumber01}
								name="mobileNumber01"
								isPhone={true}
							/>
							<MainInputs
								icon={<img src={paddlock} alt="paddlock" />}
								placeholder="Enter your password"
								label="Password"
								errors={errors.password}
								touched={touched.password}
								name="password"
								toggleIcon={togglePasswordVisibility}
								isPassword={true}
								showPassword={showPassword}
							/>
							<MainInputs
								icon={<img src={paddlock} alt="paddlock" />}
								placeholder="Enter your password"
								label="Password again"
								errors={errors.confirmPassword}
								touched={touched.confirmPassword}
								isPassword={true}
								showPassword={showConfirmPassword}
								toggleIcon={toggleConfirmPasswordVisibility}
								name="confirmPassword"
							/>
							<Button
								title="Create Account"
								type="submit"
								className="rounded-full py-2"
							/>
						</Form>
					)}
				</Formik>

				<div className="flex gap-2 text-xs items-center justify-center mt-3">
					<p className="text-gray200">Already have an account?</p>
					<p className="text-black font-bold">
						<Link to="/">Sign In instead</Link>
					</p>
				</div>
				<p className="text-center text-xs text-gray200 mt-10">
					By clicking “create account”, I acknowledge that I have read and do
					hereby accept the terms and conditions in the a-flow's Terms of Use,
					Merchant Agreement and Privacy Policy.
				</p>
			</div>
			<div className="hidden h-screen lg:block relative bg-gray50 py-10 px-10  lg:col-span-5 2xl:col-span-4">
				<div className="bg-[url('assets/images/bgImage.png')] h-full bg-cover rounded-[30px] bg-no-repeat w-full pt-8">
					<div className="flex absolute bottom-10 justify-center">
						<div className="w-[70%]">
							<h1 className="text-white text-4xl font-semibold text-center">
								The Leading B2B Liquidity & Payment Settlement Provider.
							</h1>
							<p className="text-gray100 text-sm text-center mt-5 mb-20">
								Operating the most efficient OTC Desks in Africa
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
