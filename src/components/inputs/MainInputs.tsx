import React, { ReactNode } from "react";
import mark from "../../assets/icons/mark.svg";
import { Field } from "formik";
import HideIcon from "../../assets/icons/hide.svg";
import ShowIcon from "../../assets/icons/show.svg";

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
			className={`relative border-gray100 border  rounded-lg gap-5 mt-5 2xl:mt-8 flex p-3 lg:p-5  items-center focus:border-red ${
				errors && !touched ? "border-2 relative border-red  rounded-lg " : ""
			} `}
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
							className={`mt-1 w-2/12  focus:outline-none block border-r border-gray200 sm:text-sm  ${
								isPhone ? `block` : "hidden"
							}`}
						>
							<option value="+234">+234</option>
							<option value="+91">+91</option>
							<option value="+44">+44</option>
						</Field>
						<Field
							type={isPassword && !showPassword ? "password" : "text"}
							id={label}
							name={name}
							placeholder={placeholder}
							className="text-black placeholder-transparent outline-none  font-light focus:border-0 w-11/12 focus:outline-none focus:bg-none"
						/>
					</div>
				</div>
				{triesLeft !== undefined ? (
					<p className="text-red text-xs w-[100px] block  mr-2">
						{triesLeft > 0 && triesLeft < 5
							? `${5 - triesLeft} tries Left`
							: null}
					</p>
				) : null}
				<div onClick={toggleIcon}>
					{isPassword ? (
						showPassword ? (
							<img src={HideIcon} alt="show" />
						) : (
							<img src={ShowIcon} alt="hide" />
						)
					) : null}
				</div>
				{!errors && touched && !isPassword && <img src={mark} alt="correct" />}
			</div>
		</div>
	);
};

export default MainInputs;
