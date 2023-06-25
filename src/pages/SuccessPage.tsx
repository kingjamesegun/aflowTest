import SuccessIcon from "../assets/icons/success.svg";
import Status from "../components/status/Status";

const SuccessPage = () => {
	return (
		<div>
			<Status
				icon={<img src={SuccessIcon} alt="" />}
				title="Login success!"
				desc="Your dashboard is loading..."
				isLoading={true}
			/>
		</div>
	);
};

export default SuccessPage;
