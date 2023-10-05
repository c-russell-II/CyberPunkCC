import { useState } from "react";
import Accordian from "../Components/Accordian";
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

	//TODO: Handle the actual purchase price of cyberware in the PickOS component
	const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setChoice(event.currentTarget.value);
	};
	//TODO: Handle the cyberware capacity check in the PickOS component
	const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		decreaseMoney(OSOptions[choice].price);
		installCyberware(OSOptions[choice]);
		props.next();
	};

	return (
		<section>
			<h2>Select Your Runner's Operating System</h2>
			{/* TODO: better description for Pick OS */}
			{/* TODO: display currently chosen OS! */}
			<p>pick your most important cyberware</p>
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
			{choice && <button onClick={handleSubmit}>Confirm</button>}
		</section>
	);
}
