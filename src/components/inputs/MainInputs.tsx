import React, { ReactNode } from "react";
import mark from "../../assets/icons/mark.svg";
import { Field } from "formik";
import HideIcon from "../../assets/icons/hide.svg";

interface MainInputsProps {
	icon: ReactNode;
	label: string;
	placeholder: string;
	errors: string | undefined;
	touched: boolean | undefined;
	name: string;
	isPhone?: boolean;
	triesLeft?: number | undefined;
	isPassword?: boolean;
	toggleIcon?: () => void;
	showPassword?: boolean;
}

const MainInputs: React.FC<MainInputsProps> = ({
	icon,
	label,
	placeholder,
	errors,
	touched,
	showPassword,
	toggleIcon,
	name,
	isPhone,
	triesLeft,
	isPassword,
}) => {
	return (
		<div
			className={`relative border-gray100 border-2 rounded-lg gap-5 mt-5 flex p-5  items-center${
				errors && touched ? "border-2 relative border-red  rounded-lg " : ""
			} ${
				triesLeft !== undefined && triesLeft > 0 ? "border-2 border-red" : null
			}`}
		>
			{icon}
			<div className="w-full flex  items-center justify-between">
				<div className="flex flex-col w-10/12">
					<label htmlFor={label} className="text-xs text-gray200 capitalize">
						{label}
					</label>

					<div className="flex gap-3 w-full">
						<Field
							as="select"
							id="countryCode"
							name="countryCode"
							className={`mt-1 w-2/12 focus:outline-none block border-r border-gray200 sm:text-sm  ${
								isPhone ? `block` : "hidden"
							}`}
						>
							<option value="+234">+234</option>
							<option value="+91">+91</option>
							<option value="+44">+44</option>
						</Field>
						<Field
							placeholder={placeholder}
							type={isPassword && !showPassword ? "password" : "text"}
							className="text-black bg-white font-semibold focus:border-0 w-11/12 focus:outline-none"
							id={label}
							name={name}
						/>
					</div>
				</div>
				{triesLeft !== undefined ? (
					<p className="text-red text-xs w-16 mr-2">
						{triesLeft > 0 && triesLeft < 3 ? `${triesLeft} tries Left` : null}
					</p>
				) : null}
				<div onClick={toggleIcon}>
					{isPassword ? <img src={HideIcon} alt="show" /> : null}
				</div>
				{!errors && touched && !isPassword && <img src={mark} alt="correct" />}
			</div>
		</div>
	);
};

export default MainInputs;
