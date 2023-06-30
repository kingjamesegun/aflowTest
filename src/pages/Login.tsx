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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/icons/google.svg";
import Error from "../components/status/Error";
import { loginAttempt } from "../api/LoginAttempt";

const Login = () => {
	const [triesLeft, setTriesLeft] = useState<number>(0);
	const [rememberMe, setRememberMe] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState("");

	const navigate = useNavigate();
	const handleRememberMeChange = () => {
		setRememberMe(!rememberMe);
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async (values: LoginProps) => {
		const request: LoginRequest = values;
		const userEmail = values.username;

		try {
			const response = await login(request);
			const token = response.token;
			localStorage.setItem("token", token);

			navigate("/login-success");

			setRememberMe(false);
		} catch (error: any) {
			const res = await loginAttempt(userEmail);
			setTriesLeft(res.attempt);
			setErrors(error.message);

			if (triesLeft === 4) {
				navigate("/error-attempt");
			}
		}
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 ">
			<div className="px-5 lg:px-20 py-10 lg:col-span-7 2xl:col-span-8">
				<div className="flex justify-between">
					<img src={logo} alt="logo" />
					{errors ? <Error errors={errors} /> : null}
				</div>
				<PageHeader
					title="Welcome back"
					desc="Enter credentials to sign in. "
				/>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, values, initialValues }) => (
						<Form>
							<div className="mt-10">
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
									toggleIcon={togglePasswordVisibility}
									name="password"
									showPassword={showPassword}
									triesLeft={triesLeft}
									isPassword={true}
								/>
								<div className="flex justify-between mt-8 lg:mt-5 px-[20px] items-center">
									<div className="flex gap-2 items-center">
										<input
											type="checkbox"
											id="rememberMe"
											checked={rememberMe}
											onChange={handleRememberMeChange}
											className="accent-primaryBlue   bg-grey-700 "
										/>
										<label htmlFor="rememberMe" className="text-xs">
											Remember Me
										</label>
									</div>
									<p className="text-primaryBlue font-bold text-xs">
										<Link to="forget-password">Forget Password</Link>
									</p>
								</div>

								<div className="flex gap-5 flex-col">
									<Button
										title="Sign In"
										type="submit"
										className="rounded-full py-2"
									/>
									<p className="text-center text-sm lg:hidden">or</p>
									<div className="flex gap-3 mb-10 justify-center border border-gray100 lg:border-none rounded-full py-3">
										<img src={GoogleIcon} alt="Google Icon" />
										<p className="text-gray200">Continue with Google</p>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>

				<div
					role="button"
					className="flex gap-2 text-xs items-center justify-center mt-3"
				>
					<p className="text-gray200">Don’t have an account? </p>
					<p className="text-black font-bold ">
						<Link to="/signup">Create Account.</Link>
					</p>
				</div>
			</div>
			<div className="hidden lg:block h-full relative bg-gray50 py-10 px-10  lg:col-span-5 2xl:col-span-4">
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

export default Login;
