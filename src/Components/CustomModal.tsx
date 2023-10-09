import { PropsWithChildren } from "react";

export default function CustomModal(props: PropsWithChildren<{active: boolean, control: (arg0: boolean) => void}>) {
    const {active, control} = props;
	const clickHandler = (event: React.SyntheticEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};
	return (
		<>
			{active && (
				<div
					className="modal-Outer"
					onClick={() => control(false)}
				>
					<div
						className="modal-inner"
						onClick={clickHandler}
					>
                        <button onClick={() => control(false)} className="x-button">X</button>
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}
