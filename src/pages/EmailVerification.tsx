import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import Paddlock from "../assets/icons/paddlock.svg";
import Button from "../components/button/Button";

const otpValidationSchema = Yup.object().shape({
	otp: Yup.string()
		.matches(/^\d{6}$/, "Invalid OTP")
		.required("Please enter the OTP"),
});
const EmailVerification = () => {
	const [otp, setOtp] = useState<string>("");
	const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const { value } = e.target;
		setOtp((prevOtp) => {
			const updatedOtp = prevOtp.split("");
			updatedOtp[index] = value;
			return updatedOtp.join("");
		});
		if (value.length === 1 && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleSubmit = (values: { otp: string }) => {
		console.log(values);
		// Perform any additional logic or submit the form
	};

	const OtpInput = React.forwardRef<
		HTMLInputElement,
		{ field: any; index: number }
	>(({ field, index }, ref) => {
		const { errors, touched } = useFormikContext();
		// const error = errors[field.name];
		// const touch = touched[field.name];

		return (
			<div>
				<input
					{...field}
					type="text"
					maxLength={1}
					value={otp[index] || ""}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleChange(e, index)
					}
					ref={ref}
					className="w-12 text-center font-semibold  text-primaryBlue  focus:border-primaryBlue active:border-primaryBlue text-2xl border border-gray200 rounded-lg py-5"
					// className={`w-12 h-12 text-2xl border ${
					// 	error && touch ? "border-red-500" : "border-gray-300"
					// } rounded text-center`}
				/>
			</div>
		);
	});
	return (
		<div className="bg-lightBlue flex justify-center h-screen items-center flex-col p-5">
			<div className=" w-full lg:w-1/3 ">
				<div className="bg-white p-10 rounded-lg flex items-center flex-col">
					<div>
						<img
							src={Paddlock}
							alt="Paddlock"
							className="p-5 bg-lightBlue50 "
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="font-semibold text-4xl mt-5">Verify it’s you</h1>
						<p className="text-gray100 text-center">
							Enter the 6-digit code we sent to your email
						</p>
					</div>
					<Formik
						initialValues={{ otp: "" }}
						validationSchema={otpValidationSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<div className="flex gap-2">
								{Array.from({ length: 6 }, (_, index) => (
									<div key={index}>
										<Field
											name="otp"
											type="text"
											component={OtpInput}
											index={index}
											ref={(input: HTMLInputElement | null) => {
												inputRefs.current[index] = input;
											}}
										/>
									</div>
								))}
							</div>
							<Button type="submit" title="Let’s go" />
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default EmailVerification;
