import { useState } from "react";
import Accordian from "../Components/Accordian/Accordian";
import { requirementCheck } from "../Info/Cyberware";
import { OSOptions } from "../Info/CyberwareInfo/OSCyberware";
import useStatStore from "../Utils/StatStore";
import { useCharaStore } from "../Utils/CharaStore";

export default function PickOS(props: { next: () => void }) {
	const { stats } = useStatStore();
	const { installedCyberware, installCyberware, decreaseMoney } =
		useCharaStore();
	const [choice, setChoice] = useState("");
	const availableOptions = Object.keys(OSOptions).filter((option) =>
		requirementCheck(OSOptions[option], stats, installedCyberware)
	);

	const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setChoice(event.currentTarget.value);
	};
	const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		decreaseMoney(OSOptions[choice].price);
		installCyberware(OSOptions[choice]);
		props.next();
	};

	return (
		<section>
			<h2>Select Your Runner's Operating System</h2>
			<p>
				Most Cyberware handles simple things - tougher skin, faster nerve
				response, and the like, these bits of chrome are a different sort
				entirely. 'OS'-ware, as we'll call it, fundamentally defines how you
				fight - through the net, through strength and firepower, or through
				speed and positioning.
			</p>
			{availableOptions.map((option) => (
				<Accordian
					title={option}
					tier={2}
				>
					<p>{OSOptions[option].description}</p>
					<button
						onClick={handleClick}
						value={option}
					>
						Select
					</button>
				</Accordian>
			))}
			{choice && (
				<>
					<p>Install {choice}?</p>
					<br />
					<button onClick={handleSubmit}>Confirm</button>{" "}
				</>
			)}
		</section>
	);
}
