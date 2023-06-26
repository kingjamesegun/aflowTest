import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { validateToken } from "../api";
import OtpInput from "../components/inputs/OtpInput";
import Paddlock from "../assets/icons/paddlock2.svg";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";

const verificationSchema = Yup.object().shape({
	digit1: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
	digit2: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
	digit3: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
	digit4: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
	digit5: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
	digit6: Yup.string()
		.matches(/^\d$/, "Invalid digit")
		.required("Digit is required"),
});

const PhoneVerify: React.FC = () => {
	const navigate = useNavigate();

	const initialValues = {
		digit1: "",
		digit2: "",
		digit3: "",
		digit4: "",
		digit5: "",
		digit6: "",
	};

	const handleSubmit = (values: {
		digit1: string;
		digit2: string;
		digit3: string;
		digit4: string;
		digit5: string;
		digit6: string;
	}) => {
		// Combine the individual digits into a single verification code
		const verificationCode = Object.values(values).join("");
		const email = "kingjamesegun@gmail.com";
		const request = { email, token: verificationCode };
		const token = localStorage.getItem("token");
		const response = validateToken(request, token);
		console.log({ response });
		navigate("/signup-success");
	};

	return (
		<div className="bg-lightBlue pt-20 justify-center items-center px-5 h-screen">
			<div className="mx-auto w-full lg:w-1/3 ">
				<div className="bg-white p-10 mx-auto rounded-xl  flex flex-col items-center">
					<div className="bg-lightBlue rounded-full mb-3 py-4 px-2">
						<img src={Paddlock} alt="Paddlock" className="w-1/2 mx-auto  " />
					</div>
					<div className="flex justify-center items-center gap-3 flex-col">
						<h1 className="font-semibold text-3xl">Verify it’s you</h1>
						<p className="text-gray200 text-center">
							Enter the 6-digit code we sent to your email
						</p>
					</div>
					<Formik
						initialValues={initialValues}
						validationSchema={verificationSchema}
						onSubmit={handleSubmit}
					>
						{({ errors, touched }) => (
							<Form>
								<div className="flex gap-3 my-10">
									<OtpInput
										id="digit1"
										name="digit1"
										error={errors.digit1}
										touched={touched.digit1}
									/>
									<OtpInput
										id="digit2"
										name="digit2"
										error={errors.digit2}
										touched={touched.digit2}
									/>
									<OtpInput
										id="digit3"
										name="digit3"
										error={errors.digit3}
										touched={touched.digit3}
									/>
									<OtpInput
										id="digit4"
										name="digit4"
										error={errors.digit4}
										touched={touched.digit4}
									/>
									<OtpInput
										id="digit5"
										name="digit5"
										error={errors.digit5}
										touched={touched.digit5}
									/>
									<OtpInput
										id="digit6"
										name="digit6"
										error={errors.digit6}
										touched={touched.digit6}
									/>
								</div>
								<Button
									type="submit"
									title="Let’s go"
									className="rounded-md py-5"
								/>
							</Form>
						)}
					</Formik>
				</div>

				<div className="mt-12 flex justify-center">
					<Link to="/phone-verify">
						<button className="py-3  px-5 bg-[#E4E4E4] border-gray200 border rounded-full">
							Verify with email address
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PhoneVerify;
