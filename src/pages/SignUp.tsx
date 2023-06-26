import logo from "../assets/icons/logo.svg";
import PageHeader from "../components/header/PageHeader";
import email from "../assets/icons/email.svg";
import paddlock from "../assets/icons/paddlock.svg";
import phone from "../assets/icons/phone.svg";
import globe from "../assets/images/globe.png";
import MainInputs from "../components/inputs/MainInputs";
import { Formik, Form } from "formik";
import {
	SignUpProps,
	initialValues,
	validationSchema,
} from "../validations/signUpValidate";
import Button from "../components/button/Button";
import { signup, SignUpRequest, sendToken } from "../api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	const handleSubmit = async (values: SignUpProps) => {
		const { confirmPassword, ...signupData } = values;
		const request: SignUpRequest = signupData;
		try {
			const response = await signup(request);
			const token = localStorage.getItem("token");
			const email = "kingjamesegun@gmail.com";
			sendToken(email, token);

			navigate("/verify");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 ">
			<div className="px-5 lg:px-20 py-10">
				<img src={logo} alt="logo" />
				<PageHeader
					title="Get Started"
					desc="Welcome, please enter your details to create your account."
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
							/>
							<MainInputs
								icon={<img src={paddlock} alt="paddlock" />}
								placeholder="Enter your password"
								label="Password"
								errors={errors.confirmPassword}
								touched={touched.confirmPassword}
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

export default SignUp;
