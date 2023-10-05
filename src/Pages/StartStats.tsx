import { useState } from "react";
import SingleStat from "../Components/NumberChooser";
import useStatStore from "../Utils/StatStore";
import { useCharaStore } from "../Utils/CharaStore";

export default function StartStats(props: { next: () => void }) {
	const { stats, increase, decrease } = useStatStore();
	const {increaseMoney} = useCharaStore();
	const [points, setPoints] = useState(21);

	const checkStatChange = (val: number, dir: boolean) => {
		if (dir) {
			if (val > points) {
				alert("Not enough points!");
				return false;
			}
			if (val > 4) {
				alert("Maximum value (should be) 5!");
				return false;
			}
			setPoints((prev) => prev - (val + 1));
			return true;
		} else {
			if (val < 2) {
				alert("Minimum value (should be) 1!");
				return false;
			}
			setPoints((prev) => prev + val);
			return true;
		}
	};

	const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (points > 2) {
			alert("You gotta spend more points, choom!");
			return;
		}
		increaseMoney(100 * points);
		props.next();
	};

	return (
		<section>
			<h2> Hard Stats</h2>
			<p>Available Primary Stat Points: {points}</p>
			<SingleStat
				name="Physique"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.phys, dir) ? increase("phys") : null;
					} else {
						checkStatChange(stats.phys, dir) ? decrease("phys") : null;
					}
				}}
				value={stats.phys}
			/>
			<SingleStat
				name="Reflexes"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.reflex, dir) ? increase("reflex") : null;
					} else {
						checkStatChange(stats.reflex, dir) ? decrease("reflex") : null;
					}
				}}
				value={stats.reflex}
			/>
			<SingleStat
				name="Neuro"
				changeHandler={(dir) => {
					if (dir) {
						checkStatChange(stats.neuro, dir) ? increase("neuro") : null;
					} else {
						checkStatChange(stats.neuro, dir) ? decrease("neuro") : null;
					}
				}}
				value={stats.neuro}
			/>
			<button onClick={handleSubmit}>Finalize stats.</button>
		</section>
	);
}
