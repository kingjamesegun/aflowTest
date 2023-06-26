import React from "react";
import WarningIcon2 from "../../assets/icons/warning-small.svg";

const Error = ({ errors }: { errors: string }) => {
	return (
		<div className="flex gap-2 bg-red10 rounded-md px-3 py-2 items-center">
			<img src={WarningIcon2} alt="Warning IconSmall" />
			<p className="text-xs">{errors} </p>
		</div>
	);
};

export default Error;
