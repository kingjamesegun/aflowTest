import React, { ReactNode } from "react";
import Logo from "../../assets/icons/logo.svg";
import Loader from "../../assets/icons/loader.svg";
import Button from "../button/Button";

type StatusProps = {
	icon: ReactNode;
	title: string;
	desc: string;
	isLoading: boolean;
};

const Status: React.FC<StatusProps> = ({ icon, title, desc, isLoading }) => {
	return (
		<div className="bg-white flex flex-col justify-center w-full  h-full items-center my-32">
			<div className="w-full px-5 lg:w-1/3  flex flex-col items-center">
				<div className="flex flex-col justify-center items-center my-5">
					{icon}
					<p className="font-bold text-3xl mt-20">{title}</p>
					<p className="text-gray100 mt-3">{desc}</p>

					{isLoading ? (
						<img src={Loader} alt="loader" className="my-10" />
					) : (
						<Button
							title="Contact Support"
							type="button"
							className="rounded-full py-2"
						/>
					)}
				</div>
				<img src={Logo} alt="logo" className="mt-32" />
			</div>
		</div>
	);
};

export default Status;
