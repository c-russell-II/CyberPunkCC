import { useState } from "react";
import NumericChooser from "../Components/NumberChooser";
import { useRoleStore } from "../Utils/RoleStore";
import { useCharaStore } from "../Utils/CharaStore";
import useStatStore from "../Utils/StatStore";

export default function SecondaryStats(props: { next: () => void }) {
	//This is primarily figuring out how to generate, pick, and apply the secondary stats: "Path" (which is replaced by, yknow, your actual path), "Connections" which represents who you know and who knows you, and "Rep", which is how well known you are more generally. Gotta start working through the other half of those stats, now.
	const {increaseMoney} = useCharaStore();
	const {stats, increase, decrease} = useStatStore();
	const [points, setPoints] = useState(24);
	const pathName = useRoleStore((state) => state.role);

	const increasePath = () => {
		if (stats.path + 1 > points) {
			alert("Not enough points!");
		} else {
			setPoints((prev) => prev - (stats.path + 1));
			increase("path");
		}
	};
	const decreasePath = () => {
		if (stats.path < 2) {
			alert("Cannot reduce this stat further!");
		} else {
			setPoints((prev) => prev + stats.path);
			decrease("path")
		}
	};
	const handlePathChange = (up: boolean) => {
		up ? increasePath() : decreasePath();
	};

	const increaseConnections = () => {
		if (stats.connections + 1 > points) {
			alert("Not enough points!");
		} else {
			setPoints((prev) => prev - stats.connections - 1);
			increase('connections')
		}
	};
	const decreaseConnections = () => {
		if (stats.connections < 2) {
			alert("Cannot reduce this stat further!");
		} else {
			setPoints((prev) => prev + stats.connections);
			decrease('connections');
		}
	};
	const handleConnectionsChange = (up: boolean) =>
		up ? increaseConnections() : decreaseConnections();

	const increaseRep = () => {
		if (stats.rep + 1 > points) {
			alert("Not enough points!");
		} else {
			setPoints((prev) => prev - stats.rep - 1);
			increase('rep');
		}
	};
	const decreaseRep = () => {
		if (stats.rep < 2) {
			alert("Cannot reduce this stat further!");
		} else {
			setPoints((prev) => prev + stats.rep);
			decrease('rep');
		}
	};
	const handleRepChange = (up: boolean) => (up ? increaseRep() : decreaseRep());

	const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (points > 2) {
			alert("You gotta spend more points, choom!");
		}
		increaseMoney(100 * points);
		props.next();
	}

	return (
		<section>
			<h2>Soft Stats</h2>
			<p>Available secondary stat points: {points}</p>
			<NumericChooser
				name={pathName}
				value={stats.path}
				changeHandler={handlePathChange}
			/>
			<NumericChooser
				name={"Connections"}
				value={stats.connections}
				changeHandler={handleConnectionsChange}
			/>
			<NumericChooser
				name={"Rep"}
				value={stats.rep}
				changeHandler={handleRepChange}
			/>
			<button onClick={handleSubmit}>Confirm</button>
		</section>
	);
}
