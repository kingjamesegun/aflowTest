import React from "react";
import Status from "../components/status/Status";
import ErrorIcon from "../assets/icons/error.svg";

const ErrorAttempt = () => {
	return (
		<div>
			<Status
				title="Too many attempts"
				desc="you’ve been locked out."
				icon={<img src={ErrorIcon} alt="ErrorIcon" />}
				isLoading={false}
			/>
		</div>
	);
};

export default ErrorAttempt;
