import React, { useState } from "react";
import { validateToken } from "../api";
import OtpInput from "../components/inputs/OtpInput";
import Paddlock from "../assets/icons/paddlock2.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const VerificationForm: React.FC = () => {
	const navigate = useNavigate();

	const [otp, setOtp] = useState("");
	const [error, setError] = useState("");

	const onChange = (value: string) => setOtp(value);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const email = "kingjamesegun@gmail.com";
			const request = { email, token: otp };
			const token = localStorage.getItem("token");
			const response = await validateToken(request, token);

			if (response) {
				navigate("/signup-success");
			}
		} catch (error: any) {
			setError(error.message);
		}
	};
	return (
		<div className="bg-bgBlue pt-20 justify-center items-center px-5 h-screen">
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
					<form onSubmit={handleSubmit}>
						<div className="flex  flex-col gap-5 my-10">
							<OtpInput
								value={otp}
								valueLength={6}
								onChange={onChange}
								error={error}
							/>
							{error ? (
								<Button
									title={error}
									type="submit"
									className="bg-gray200 py-3 rounded-md"
								/>
							) : (
								<Button
									type="submit"
									title="Let's go"
									className="bg-lightBlue py-3 rounded-md"
								/>
							)}
						</div>
					</form>
				</div>

				<div className="mt-12 flex justify-center">
					<Link to="/phone-verify">
						<button className="py-3  px-5 bg-[#E4E4E4] border-gray200 border rounded-full">
							Verify with phone number
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VerificationForm;
