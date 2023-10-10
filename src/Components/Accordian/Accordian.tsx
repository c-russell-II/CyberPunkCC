import { useState, PropsWithChildren } from "react";

export interface AccordianProps {
	title: string;
	tier?: 1 | 2 | 3 | 4 | 5;
	openClass?: string;
	closedClass?: string;
}
export default function Accordian(props: PropsWithChildren<AccordianProps>) {
	const [isActive, setIsActive] = useState(false);
	const { title, children, tier } = props;
	const openClass = props.openClass ? props.openClass : "defaultAccordian";
	const closedClass = props.closedClass
		? props.closedClass
		: "defaultAccordian";
	const getTitle = () => {
		switch (tier) {
			case 1:
				return (
					<h1>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</h1>
				);
			case 2:
				return (
					<h2>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</h2>
				);
			case 3:
				return (
					<h3>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</h3>
				);
			case 4:
				return (
					<h4>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</h4>
				);
			case 5:
				return (
					<h5>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</h5>
				);
			default:
				return (
					<p>
						{title} {isActive ? <span>-</span> : <span>+</span>}
					</p>
				);
		}
	};
	return (
		<article
			onClick={(event: React.SyntheticEvent) => {
				setIsActive((prev) => !prev);
				event.stopPropagation();
			}}
			className={isActive ? openClass : closedClass}
		>
			{getTitle()}
			{isActive && children}
		</article>
	);
}
