import { Field } from "formik";

type OtpInputProps = {
	name: string;
	id: string;
	error: string | undefined;
	touched: boolean | undefined;
};
const OtpInput = ({ name, id, error, touched }: OtpInputProps) => {
	return (
		<div
			className={`w-12 border-2 text-center border-gray100 py-5 rounded-md text-3xl active:border-[#169DD7] px-2 ${
				error && touched ? "border-red" : null
			} ${!error && touched ? "border-[#169DD7] text-[#169DD7]" : null}`}
		>
			<Field
				type="text"
				id={id}
				name={name}
				maxLength={1}
				className="focus:border-b border-lightBlue w-full text-center text-lightBlue focus:outline-none"
			/>
		</div>
	);
};

export default OtpInput;
