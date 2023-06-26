import Status from "../components/status/Status";
import SuccessIcon from "../assets/icons/success.svg";

const LoginSuccess = () => {
	return (
		<div>
			<Status
				title="Login success!"
				desc="Your dashboard is loading..."
				icon={<img src={SuccessIcon} alt="ErrorIcon" />}
				isLoading={true}
			/>
		</div>
	);
};

export default LoginSuccess;
