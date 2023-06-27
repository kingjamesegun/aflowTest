import React, { useMemo } from "react";
const RE_DIGIT = new RegExp(/^\d+$/);

export type Props = {
	value: string;
	valueLength: number;
	onChange: (value: string) => void;
	error: string;
};

export default function OtpInput({
	value,
	valueLength,
	onChange,
	error,
}: Props) {
	const valueItems = useMemo(() => {
		const valueArray = value.split("");
		const items: Array<string> = [];

		for (let i = 0; i < valueLength; i++) {
			const char = valueArray[i];

			if (RE_DIGIT.test(char)) {
				items.push(char);
			} else {
				items.push("");
			}
		}

		return items;
	}, [value, valueLength]);

	const focusToNextInput = (target: HTMLElement) => {
		const nextElementSibling =
			target.nextElementSibling as HTMLInputElement | null;

		if (nextElementSibling) {
			nextElementSibling.focus();
		}
	};
	const inputOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		idx: number
	) => {
		const target = e.target;
		let targetValue = target.value.trim();
		const isTargetValueDigit = RE_DIGIT.test(targetValue);

		if (!isTargetValueDigit && targetValue !== "") {
			return;
		}

		const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

		// only delete digit if next input element has no value
		if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
			return;
		}

		targetValue = isTargetValueDigit ? targetValue : " ";

		const targetValueLength = targetValue.length;

		if (targetValueLength === 1) {
			const newValue =
				value.substring(0, idx) + targetValue + value.substring(idx + 1);

			onChange(newValue);

			if (!isTargetValueDigit) {
				return;
			}

			focusToNextInput(target);
		} else if (targetValueLength === valueLength) {
			onChange(targetValue);

			target.blur();
		}
	};

	return (
		<div className="flex gap-2">
			{valueItems.map((digit, idx) => (
				<input
					key={idx}
					type="text"
					inputMode="numeric"
					autoComplete="one-time-code"
					pattern="\d{1}"
					maxLength={valueLength}
					className={`border w-12 py-5 text-center text-3xl rounded-lg  ${
						error ? "border-red text-red" : "border-gray100  text-lightBlue"
					}`}
					value={digit}
					onChange={(e) => inputOnChange(e, idx)}
				/>
			))}
		</div>
	);
}
