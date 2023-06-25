import PageHeader from "../components/header/PageHeader";
import { Form, Formik } from "formik";
import logo from "../assets/icons/logo.svg";
import {
	LoginProps,
	initialValues,
	validationSchema,
} from "../validations/loginValidate";
import { LoginRequest, login } from "../api";
import MainInputs from "../components/inputs/MainInputs";
import Button from "../components/button/Button";
import email from "../assets/icons/email.svg";
import paddlock from "../assets/icons/paddlock.svg";
import globe from "../assets/images/globe.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [triesLeft, setTriesLeft] = useState<number>(3);
	const navigate = useNavigate();
	const handleSubmit = async (values: LoginProps) => {
		const request: LoginRequest = values;
		try {
			const response = await login(request);
			console.log("working");

			console.log({ response });
		} catch (error) {
			setTriesLeft((prevTries) => prevTries - 1);
			if (triesLeft === 0) {
				navigate("/error-attempt");
			}
		}
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 ">
			<div className="px-5 lg:px-20 py-10">
				<img src={logo} alt="logo" />
				<PageHeader
					title="Welcome back"
					desc="Enter credentials to sign in. "
				/>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<Form>
							<MainInputs
								icon={<img src={email} alt="email" />}
								placeholder="Enter your email"
								label="Email Address"
								errors={errors?.username}
								touched={touched.username}
								name="username"
							/>
							<MainInputs
								icon={<img src={paddlock} alt="paddlock" />}
								placeholder="Enter your password"
								label="Password"
								errors={errors.password}
								touched={touched.password}
								name="password"
								triesLeft={triesLeft}
								isPassword={true}
							/>
							<Button title="Create Account" type="submit" />
						</Form>
					)}
				</Formik>

				<div className="flex gap-2 text-xs items-center justify-center mt-3">
					<p className="text-gray200">Already have an account?</p>
					<p className="text-black font-bold">Sign In instead</p>
				</div>
				<p className="text-center text-xs text-gray200 mt-10">
					By clicking “create account”, I acknowledge that I have read and do
					hereby accept the terms and conditions in the a-flow's Terms of Use,
					Merchant Agreement and Privacy Policy.
				</p>
			</div>
			<div className="hidden lg:block bg-gray50 p-10">
				<div className="bg-[url('assets/images/authBg.png')] h-full bg-cover bg-no-repeat w-full pt-14">
					<img src={globe} alt="globe" />
					<div className="flex  justify-center">
						<div className="w-[50%]">
							<h1 className="text-white text-3xl font-bold text-center">
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

export default Login;
