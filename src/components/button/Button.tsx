import React from "react";

type ButtonProps = {
	type: "button" | "submit" | "reset" | undefined;
	title: string;
	className: string;
};
const Button = ({ type, title, className }: ButtonProps) => {
	return (
		<button
			className={`bg-primaryBlue w-full text-center text-white font-bold mt-5 ${className}`}
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
