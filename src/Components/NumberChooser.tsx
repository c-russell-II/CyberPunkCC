export default function NumericChooser(props: {
	name: string;
	changeHandler: (arg0: boolean) => void;
	value: number;
}) {
	//TODO: Handle dynamic classNames in numericchooser?
	return (
		<>
			<label htmlFor={props.name}>{props.name}: </label>
			<button
				onClick={() => props.changeHandler(false)}
				className="down-arrow"
			/>
			<span> {props.value} </span>
			<button
				onClick={() => props.changeHandler(true)}
				className="up-arrow"
			/>
		</>
	);
}
