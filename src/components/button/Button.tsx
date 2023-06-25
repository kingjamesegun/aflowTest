import React from "react";

type ButtonProps = {
	type: "button" | "submit" | "reset" | undefined;
	title: string;
};
const Button = ({ type, title }: ButtonProps) => {
	return (
		<button
			className="bg-primaryBlue w-full py-2 rounded-full text-center text-white font-bold mt-10"
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
