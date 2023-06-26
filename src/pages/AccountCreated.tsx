import SuccessIcon from "../assets/icons/success.svg";
import Status from "../components/status/Status";

const AccountCreated = () => {
	return (
		<div>
			<Status
				icon={<img src={SuccessIcon} alt="" />}
				title="Account creation success!"
				desc="Your dashboard is loading..."
				isLoading={true}
			/>
		</div>
	);
};

export default AccountCreated;
