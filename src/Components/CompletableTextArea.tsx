import { useState } from "react";

export default function CompletableTextArea(props: {
	handler: (arg0: string) => void;
	label: string;
	stopProp?: boolean;
}) {
	const [curr, setCurr] = useState("");
	const clickHandler = props.stopProp
		? (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
				event.stopPropagation();
		}
		: () => {};
	return (
		<div className="compTextArea">
			<label htmlFor={props.label}>{props.label}</label>
			<textarea
				id={props.label}
				value={curr}
				onChange={(e) => setCurr(e.target.value)}
				onClick={clickHandler}
				rows={3}
			/>
			<button
				onClick={(event) => {
					event?.stopPropagation();
					props.handler(curr);
				}}
			>
				Confirm
			</button>
		</div>
	);
}
